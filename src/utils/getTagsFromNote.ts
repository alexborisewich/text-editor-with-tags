export const getUniqueTagsFromNote = (note: string, tagsArr: string[]) => {
  if (note.includes('#') && !note.endsWith('#') && note.endsWith(' ')) {
    return [
      ...new Set(
        note
          .toLowerCase()
          .split(/(#[a-z\d-]+)/gi)
          .filter((item) => item.startsWith('#') && item.length > 1 && !tagsArr.includes(item))
      ),
    ];
  }
  return [];
};
