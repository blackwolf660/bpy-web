export type UserData = {
  id: number;
  username: string;
};

export type LBUser = {
  a_count: number;
  acc: number;
  clan_id: number;
  clan_name: string;
  clan_tag: string;
  country: string;
  max_combo: number;
  name: string;
  player_id: number;
  plays: number;
  playtime: number;
  pp: number;
  rscore: number;
  s_count: number;
  sh_count: number;
  tscore: number;
  x_count: number;
  xh_count: number;
};

export type UserModeStats = {
  tscore: number;
  rscore: number;
  pp: number;
  plays: number;
  playtime: number;
  acc: number;
  max_combo: number;
  xh_count: number;
  x_count: number;
  sh_count: number;
  s_count: number;
  a_count: number;
  replay_views: number;
  rank: number;
  country_rank: number;
};

export type User = {
  status: "success" | string;
  player?: {
    info: {
      id: number;
      name: string;
      safe_name: string;
      creation_time: number;
      latest_activity: number;
      priv: number;
      clan_id: number;
      country: string;
      preferred_mode: number;
      userpage_content: string;
    };
    stats: {
      [mode: number]: UserModeStats;
    };
  };
};

export type Clan = {
  id: number;
  name: string;
  tag: string;
  members: {
    id: number;
    name: string;
    country: string;
    rank: string;
  }[];
  owner: {
    id: number;
    name: string;
    country: string;
    rank: string;
  };
};

export type MapInfo = {
  status: "success" | string;
  map: {
    md5: string;
    id: number;
    set_id: number;
    artist: string;
    title: string;
    version: string;
    creator: string;
    last_update: string;
    total_length: number;
    max_combo: number;
    status: number;
    plays: number;
    passes: number;
    mode: number;
    bpm: number;
    cs: number;
    od: number;
    ar: number;
    hp: number;
    diff: number;
  };
};

export type Score = {
  map_md5: string;
  score: number;
  pp: number;
  acc: number;
  max_combo: number;
  mods: number;
  n300: number;
  n100: number;
  n50: number;
  nmiss: number;
  ngeki: number;
  nkatu: number;
  grade: string;
  status: number;
  mode: number;
  play_time: string;
  time_elapsed: number;
  userid: number;
  perfect: number;
  player_name: string;
  country: string;
  clan_id: number;
  clan_name: string;
  clan_tag: string;
};

export type MapScores = {
  status: "success" | string;
  scores: Score[];
};

export type Mod = {
  name: string;
  short_name: string;
};
