import re
import collections
import pathlib

root = pathlib.Path(r"D:\ceo\newnovimid\template\vendor\healthio")
pat = re.compile(r'src="images/([^"]+\.(?:jpg|jpeg|png|webp))"', re.I)
skip = ("logo", "loader", "icon-", "arrow", "author-", "company-logo", "contact-us-circle", "favicon")

by_file = collections.defaultdict(list)
for p in sorted(root.glob("*.html")):
    text = p.read_text(encoding="utf-8", errors="ignore")
    for m in pat.findall(text):
        by_file[m.lower()].append(p.name)

print("=== USED IN MULTIPLE HTML FILES ===")
for img, files in sorted(by_file.items(), key=lambda x: (-len(set(x[1])), x[0])):
    uniq = sorted(set(files))
    if len(uniq) > 1 and not any(img.startswith(s) for s in skip):
        print(f"{img}  ({len(uniq)} pages) -> {uniq}")

print("\n=== REPEATED WITHIN SAME FILE ===")
for p in sorted(root.glob("*.html")):
    text = p.read_text(encoding="utf-8", errors="ignore")
    c = collections.Counter(x.lower() for x in pat.findall(text))
    dups = [f"{k} x{v}" for k, v in c.items() if v > 1 and not any(k.startswith(s) for s in skip)]
    if dups:
        print(p.name, dups)
