const LEVEL_GRAPH = [
  0,
  30000,
  130000,
  340000,
  700000,
  1250000,
  2030000,
  3080000,
  4440000,
  6150000,
  8250000,
  10780000,
  13780000,
  17290000,
  21350000,
  26000000,
  31280000,
  37230000,
  43890000,
  51300000,
  59500000,
  68530000,
  78430000,
  89240000,
  101000000,
  113750000,
  127530000,
  142380000,
  158340000,
  175450000,
  193750000,
  213280000,
  234080000,
  256190000,
  279650000,
  304500000,
  330780000,
  358530000,
  387790000,
  418600000,
  451000000,
  485030000,
  520730000,
  558140000,
  597300000,
  638250000,
  681030000,
  725680000,
  772240000,
  820750000,
  871250000,
  923780000,
  978380000,
  1035090000,
  1093950000,
  1155000000,
  1218280000,
  1283830000,
  1351690001,
  1421900001,
  1494500002,
  1569530004,
  1647030007,
  1727040013,
  1809600024,
  1894750043,
  1982530077,
  2072980138,
  2166140248,
  2262050446,
  2360750803,
  2462281446,
  2566682603,
  2673994685,
  2784258433,
  2897515180,
  3013807324,
  3133179183,
  3255678529,
  3381359353,
  3510286835,
  3642546304,
  3778259346,
  3917612824,
  4060911082,
  4208669948,
  4361785907,
  4521840633,
  4691649139,
  4876246450,
  5084663609,
  5333124496,
  5650800094,
  6090166168,
  6745647103,
  7787174786,
  9520594614,
  12496396305,
  17705429349,
  26931190829,
];

export function getRequiredScoreForLevel(level: number): number {
  if (level <= 0) {
    return 0;
  }
  if (level <= 100) {
    return LEVEL_GRAPH[level - 1];
  }
  return LEVEL_GRAPH[99] + 100000000000 * Math.floor(level - 100);
}

export function getLevel(score: number): number {
  if (score <= 0) {
    return 1;
  }

  if (score >= LEVEL_GRAPH[99]) {
    return 100 + Math.floor((score - LEVEL_GRAPH[99]) / 100000000000);
  }

  for (let idx = 0; idx < LEVEL_GRAPH.length; idx++) {
    const v = LEVEL_GRAPH[idx];
    if (v > score) {
      return idx + 1;
    }
  }

  return 1;
}

export function getLevelPrecise(score: number): number {
  const baseLevel = getLevel(score);
  const baseLevelScore = getRequiredScoreForLevel(baseLevel);
  const scoreProgress = score - baseLevelScore;
  const scoreLevelDifference = getRequiredScoreForLevel(baseLevel + 1) -
    baseLevelScore;

  const res = scoreProgress / scoreLevelDifference + baseLevel;
  if (res === Infinity || isNaN(res)) {
    return 0;
  }

  return res;
}

export function getLevelProgress(score: number): number {
  return (getLevel(score) - getLevelPrecise(score)) * 100;
}
