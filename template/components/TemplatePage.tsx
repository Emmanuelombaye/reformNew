import { getTemplateBody } from "@/lib/template";

export function TemplatePage({ file }: { file: string }) {
  const html = getTemplateBody(file);
  // display:contents keeps body > header/section structure identical to the HTML template
  return (
    <div
      style={{ display: "contents" }}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
