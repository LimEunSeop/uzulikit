export default function getCategoryEmoji(category: string) {
  const emojiMap: Record<string, string> = {
    ['TV프로그램/예능']: '📺',
    ['건강']: '🏥',
    ['게임']: '🕹',
    ['기술']: '📱',
    ['동물/펫']: '🐶',
    ['라이프스타일']: '🏃‍♀️',
    ['뷰티']: '💄',
    ['스포츠']: '⚽️',
    ['엔터테인먼트']: '🤩',
    ['여행']: '✈️',
    ['영화/애니메이션']: '🎬',
    ['유머']: '🤣',
    ['음식']: '🍗',
    ['음악']: '🎵',
    ['자동차/바이크']: '🚗',
    ['지식/사회']: '🧠',
    ['취미']: '👍',
    ['패션']: '👕',
    ['피트니스']: '💪',
  }

  return emojiMap[category] as string | undefined
}
