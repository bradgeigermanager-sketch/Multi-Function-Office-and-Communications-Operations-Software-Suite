interface GlobalSearchResult {

  id: string;

  type:
   | "contact"
   | "project"
   | "call"
   | "opportunity"
   | "task";

  title: string;

  subtitle: string;

}
