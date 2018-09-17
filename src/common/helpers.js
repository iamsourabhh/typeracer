export const xmlParser = xml => {
  const parser = new DOMParser();
  return parser.parseFromString(xml, "text/xml");
};
