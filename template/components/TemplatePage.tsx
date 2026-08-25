import { getTemplateBody } from "@/lib/template";

export function TemplatePage({ file }: { file: string }) {
  const html = getTemplateBody(file);
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
