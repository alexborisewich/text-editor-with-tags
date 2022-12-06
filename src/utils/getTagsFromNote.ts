import { formatTag } from './formatting';

export const getUniqueTagsFromNote = (note: string, tagsArr: string[]) => {
  if (note.includes('#') && !note.endsWith('#') && note.endsWith(' ')) {
    return [
      ...new Set(
        note
          .toLowerCase()
          .split(/(#[a-zа-я\d-]+)/gi)
          .filter((tag) => tag.startsWith('#') && tag.length > 1 && !tagsArr.includes(formatTag(tag)))
      ),
    ];
  }
  return [];
};
