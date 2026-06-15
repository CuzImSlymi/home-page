// Comments and strings are matched before keywords
function highlight(line: string) {
  const tokens: { text: string; cls: string }[] = [];
  const pattern =
    /(#.*$)|("[^"]*"|'[^']*')|\b(from|import|print|def|return|for|in|if|else|True|False|None)\b|([A-Za-z_][\w]*)(?=\()/g;

  let last = 0;
  let match: RegExpExecArray | null;
  while ((match = pattern.exec(line)) !== null) {
    if (match.index > last) {
      tokens.push({ text: line.slice(last, match.index), cls: "" });
    }
    if (match[1]) tokens.push({ text: match[1], cls: "text-muted italic" });
    else if (match[2]) tokens.push({ text: match[2], cls: "text-accent" });
    else if (match[3])
      tokens.push({ text: match[3], cls: "text-accent-bronze font-medium" });
    else if (match[4]) tokens.push({ text: match[4], cls: "text-foreground" });
    last = pattern.lastIndex;
  }
  if (last < line.length) tokens.push({ text: line.slice(last), cls: "" });
  return tokens;
}

export function CodeBlock({
  language,
  code,
}: {
  language: string;
  code: string;
}) {
  const lines = code.split("\n");

  return (
    <div className="flex h-full w-full flex-col bg-[#0d0b0a]">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#5a5550]" />
        <span className="h-3 w-3 rounded-full bg-[#3a3530]" />
        <span className="h-3 w-3 rounded-full bg-[#3a3530]" />
        <span className="ml-2 font-mono text-xs text-muted">{language}</span>
      </div>
      <pre className="no-scrollbar flex-1 overflow-auto p-5 font-mono text-[13px] leading-relaxed sm:text-sm">
        <code>
          {lines.map((line, i) => (
            <div key={i} className="whitespace-pre text-muted/90">
              {highlight(line).map((tok, j) => (
                <span key={j} className={tok.cls}>
                  {tok.text}
                </span>
              ))}
              {line === "" ? " " : ""}
            </div>
          ))}
        </code>
      </pre>
    </div>
  );
}
