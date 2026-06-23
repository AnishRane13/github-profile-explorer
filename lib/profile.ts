export function hasText(value: string | null | undefined): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

export function formatJoinedDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

export function formatBlogUrl(blog: string): string {
  return blog.startsWith("http") ? blog : `https://${blog}`;
}

export function formatBlogLabel(blog: string): string {
  return blog.replace(/^https?:\/\//, "");
}

export function companyHref(company: string): string | null {
  const trimmed = company.trim();
  if (trimmed.startsWith("@")) {
    return `https://github.com/${trimmed.slice(1)}`;
  }
  return null;
}
