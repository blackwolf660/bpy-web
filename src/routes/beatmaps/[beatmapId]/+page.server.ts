import { getBeatmap } from "$lib/request.js";

export async function load({ params }) {
  const beatmapId = params.beatmapId;
  if (!(/^\d.+$/.test(beatmapId))) return {};
  return {
    map: (await getBeatmap(parseInt(beatmapId)))?.map,
  };
}
