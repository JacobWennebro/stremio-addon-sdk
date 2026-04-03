import z from "zod/v4";
export declare const shortManifestResourceSchema: z.ZodEnum<{
  catalog: "catalog";
  meta: "meta";
  stream: "stream";
  subtitles: "subtitles";
  addon_catalog: "addon_catalog";
}>;
export type ShortManifestResourceSchema = z.infer<
  typeof shortManifestResourceSchema
>;
export declare const extraSchema: z.ZodEnum<{
  search: "search";
  genre: "genre";
  skip: "skip";
}>;
export type ExtraSchema = z.infer<typeof extraSchema>;
export declare const contentTypeSchema: z.ZodEnum<{
  movie: "movie";
  series: "series";
  channel: "channel";
  tv: "tv";
}>;
export type ContentTypeSchema = z.infer<typeof contentTypeSchema>;
export declare const manifestConfigTypeSchema: z.ZodEnum<{
  number: "number";
  text: "text";
  password: "password";
  checkbox: "checkbox";
  select: "select";
}>;
export type ManifestConfigTypeSchema = z.infer<typeof manifestConfigTypeSchema>;
/**
 * A resolving object can also include the following cache related properties.
 */
export declare const cacheSchema: z.ZodObject<
  {
    cacheMaxAge: z.ZodOptional<z.ZodNumber>;
    staleRevalidate: z.ZodOptional<z.ZodNumber>;
    staleError: z.ZodOptional<z.ZodNumber>;
  },
  z.core.$strip
>;
export type CacheSchema = z.infer<typeof cacheSchema>;
/**
 * Subtitles resource for the chosen media.
 */
export declare const subtitleSchema: z.ZodObject<
  {
    id: z.ZodString;
    url: z.ZodString;
    lang: z.ZodString;
  },
  z.core.$strip
>;
export type SubtitleSchema = z.infer<typeof subtitleSchema>;
/**
 * An object representing a streaming source.
 */
export declare const streamSourceSchema: z.ZodObject<
  {
    url: z.ZodString;
    bytes: z.ZodOptional<z.ZodNumber>;
  },
  z.core.$strip
>;
export type StreamSourceSchema = z.infer<typeof streamSourceSchema>;
/**
 * Tells Stremio how to obtain the media content.
 *
 * It may be torrent info hash, HTTP URL, etc.
 */
export declare const streamSchema: z.ZodObject<
  {
    url: z.ZodOptional<z.ZodString>;
    ytId: z.ZodOptional<z.ZodString>;
    infoHash: z.ZodOptional<z.ZodString>;
    fileIdx: z.ZodOptional<z.ZodNumber>;
    externalUrl: z.ZodOptional<z.ZodString>;
    title: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
    subtitles: z.ZodOptional<
      z.ZodArray<
        z.ZodObject<
          {
            id: z.ZodString;
            url: z.ZodString;
            lang: z.ZodString;
          },
          z.core.$strip
        >
      >
    >;
    sources: z.ZodOptional<z.ZodArray<z.ZodString>>;
    fileMustInclude: z.ZodOptional<z.ZodString>;
    nzbUrl: z.ZodOptional<z.ZodString>;
    servers: z.ZodOptional<z.ZodArray<z.ZodString>>;
    rarUrls: z.ZodOptional<
      z.ZodArray<
        z.ZodObject<
          {
            url: z.ZodString;
            bytes: z.ZodOptional<z.ZodNumber>;
          },
          z.core.$strip
        >
      >
    >;
    zipUrls: z.ZodOptional<
      z.ZodArray<
        z.ZodObject<
          {
            url: z.ZodString;
            bytes: z.ZodOptional<z.ZodNumber>;
          },
          z.core.$strip
        >
      >
    >;
    "7zipUrls": z.ZodOptional<
      z.ZodArray<
        z.ZodObject<
          {
            url: z.ZodString;
            bytes: z.ZodOptional<z.ZodNumber>;
          },
          z.core.$strip
        >
      >
    >;
    tgzUrls: z.ZodOptional<
      z.ZodArray<
        z.ZodObject<
          {
            url: z.ZodString;
            bytes: z.ZodOptional<z.ZodNumber>;
          },
          z.core.$strip
        >
      >
    >;
    tarUrls: z.ZodOptional<
      z.ZodArray<
        z.ZodObject<
          {
            url: z.ZodString;
            bytes: z.ZodOptional<z.ZodNumber>;
          },
          z.core.$strip
        >
      >
    >;
    behaviorHints: z.ZodOptional<
      z.ZodObject<
        {
          countryWhitelist: z.ZodOptional<z.ZodArray<z.ZodString>>;
          notWebReady: z.ZodOptional<z.ZodBoolean>;
          bingeGroup: z.ZodOptional<z.ZodString>;
          group: z.ZodOptional<z.ZodString>;
          proxyHeaders: z.ZodOptional<
            z.ZodObject<
              {
                request: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
                response: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
              },
              z.core.$strip
            >
          >;
          videoHash: z.ZodOptional<z.ZodString>;
          videoSize: z.ZodOptional<z.ZodNumber>;
          filename: z.ZodOptional<z.ZodString>;
        },
        z.core.$strip
      >
    >;
  },
  z.core.$strip
>;
export type StreamSchema = z.infer<typeof streamSchema>;
export declare const metaLinkSchema: z.ZodObject<
  {
    name: z.ZodString;
    category: z.ZodString;
    url: z.ZodString;
  },
  z.core.$strip
>;
export type MetaLinkSchema = z.infer<typeof metaLinkSchema>;
export declare const metaVideoSchema: z.ZodObject<
  {
    id: z.ZodString;
    title: z.ZodString;
    released: z.ZodString;
    thumbnail: z.ZodOptional<z.ZodString>;
    streams: z.ZodOptional<
      z.ZodArray<
        z.ZodObject<
          {
            url: z.ZodOptional<z.ZodString>;
            ytId: z.ZodOptional<z.ZodString>;
            infoHash: z.ZodOptional<z.ZodString>;
            fileIdx: z.ZodOptional<z.ZodNumber>;
            externalUrl: z.ZodOptional<z.ZodString>;
            title: z.ZodOptional<z.ZodString>;
            description: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodString>;
            subtitles: z.ZodOptional<
              z.ZodArray<
                z.ZodObject<
                  {
                    id: z.ZodString;
                    url: z.ZodString;
                    lang: z.ZodString;
                  },
                  z.core.$strip
                >
              >
            >;
            sources: z.ZodOptional<z.ZodArray<z.ZodString>>;
            fileMustInclude: z.ZodOptional<z.ZodString>;
            nzbUrl: z.ZodOptional<z.ZodString>;
            servers: z.ZodOptional<z.ZodArray<z.ZodString>>;
            rarUrls: z.ZodOptional<
              z.ZodArray<
                z.ZodObject<
                  {
                    url: z.ZodString;
                    bytes: z.ZodOptional<z.ZodNumber>;
                  },
                  z.core.$strip
                >
              >
            >;
            zipUrls: z.ZodOptional<
              z.ZodArray<
                z.ZodObject<
                  {
                    url: z.ZodString;
                    bytes: z.ZodOptional<z.ZodNumber>;
                  },
                  z.core.$strip
                >
              >
            >;
            "7zipUrls": z.ZodOptional<
              z.ZodArray<
                z.ZodObject<
                  {
                    url: z.ZodString;
                    bytes: z.ZodOptional<z.ZodNumber>;
                  },
                  z.core.$strip
                >
              >
            >;
            tgzUrls: z.ZodOptional<
              z.ZodArray<
                z.ZodObject<
                  {
                    url: z.ZodString;
                    bytes: z.ZodOptional<z.ZodNumber>;
                  },
                  z.core.$strip
                >
              >
            >;
            tarUrls: z.ZodOptional<
              z.ZodArray<
                z.ZodObject<
                  {
                    url: z.ZodString;
                    bytes: z.ZodOptional<z.ZodNumber>;
                  },
                  z.core.$strip
                >
              >
            >;
            behaviorHints: z.ZodOptional<
              z.ZodObject<
                {
                  countryWhitelist: z.ZodOptional<z.ZodArray<z.ZodString>>;
                  notWebReady: z.ZodOptional<z.ZodBoolean>;
                  bingeGroup: z.ZodOptional<z.ZodString>;
                  group: z.ZodOptional<z.ZodString>;
                  proxyHeaders: z.ZodOptional<
                    z.ZodObject<
                      {
                        request: z.ZodOptional<
                          z.ZodRecord<z.ZodString, z.ZodString>
                        >;
                        response: z.ZodOptional<
                          z.ZodRecord<z.ZodString, z.ZodString>
                        >;
                      },
                      z.core.$strip
                    >
                  >;
                  videoHash: z.ZodOptional<z.ZodString>;
                  videoSize: z.ZodOptional<z.ZodNumber>;
                  filename: z.ZodOptional<z.ZodString>;
                },
                z.core.$strip
              >
            >;
          },
          z.core.$strip
        >
      >
    >;
    available: z.ZodOptional<z.ZodBoolean>;
    episode: z.ZodOptional<z.ZodNumber>;
    season: z.ZodOptional<z.ZodNumber>;
    trailer: z.ZodOptional<z.ZodString>;
    trailers: z.ZodOptional<
      z.ZodArray<
        z.ZodObject<
          {
            url: z.ZodOptional<z.ZodString>;
            ytId: z.ZodOptional<z.ZodString>;
            infoHash: z.ZodOptional<z.ZodString>;
            fileIdx: z.ZodOptional<z.ZodNumber>;
            externalUrl: z.ZodOptional<z.ZodString>;
            title: z.ZodOptional<z.ZodString>;
            description: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodString>;
            subtitles: z.ZodOptional<
              z.ZodArray<
                z.ZodObject<
                  {
                    id: z.ZodString;
                    url: z.ZodString;
                    lang: z.ZodString;
                  },
                  z.core.$strip
                >
              >
            >;
            sources: z.ZodOptional<z.ZodArray<z.ZodString>>;
            fileMustInclude: z.ZodOptional<z.ZodString>;
            nzbUrl: z.ZodOptional<z.ZodString>;
            servers: z.ZodOptional<z.ZodArray<z.ZodString>>;
            rarUrls: z.ZodOptional<
              z.ZodArray<
                z.ZodObject<
                  {
                    url: z.ZodString;
                    bytes: z.ZodOptional<z.ZodNumber>;
                  },
                  z.core.$strip
                >
              >
            >;
            zipUrls: z.ZodOptional<
              z.ZodArray<
                z.ZodObject<
                  {
                    url: z.ZodString;
                    bytes: z.ZodOptional<z.ZodNumber>;
                  },
                  z.core.$strip
                >
              >
            >;
            "7zipUrls": z.ZodOptional<
              z.ZodArray<
                z.ZodObject<
                  {
                    url: z.ZodString;
                    bytes: z.ZodOptional<z.ZodNumber>;
                  },
                  z.core.$strip
                >
              >
            >;
            tgzUrls: z.ZodOptional<
              z.ZodArray<
                z.ZodObject<
                  {
                    url: z.ZodString;
                    bytes: z.ZodOptional<z.ZodNumber>;
                  },
                  z.core.$strip
                >
              >
            >;
            tarUrls: z.ZodOptional<
              z.ZodArray<
                z.ZodObject<
                  {
                    url: z.ZodString;
                    bytes: z.ZodOptional<z.ZodNumber>;
                  },
                  z.core.$strip
                >
              >
            >;
            behaviorHints: z.ZodOptional<
              z.ZodObject<
                {
                  countryWhitelist: z.ZodOptional<z.ZodArray<z.ZodString>>;
                  notWebReady: z.ZodOptional<z.ZodBoolean>;
                  bingeGroup: z.ZodOptional<z.ZodString>;
                  group: z.ZodOptional<z.ZodString>;
                  proxyHeaders: z.ZodOptional<
                    z.ZodObject<
                      {
                        request: z.ZodOptional<
                          z.ZodRecord<z.ZodString, z.ZodString>
                        >;
                        response: z.ZodOptional<
                          z.ZodRecord<z.ZodString, z.ZodString>
                        >;
                      },
                      z.core.$strip
                    >
                  >;
                  videoHash: z.ZodOptional<z.ZodString>;
                  videoSize: z.ZodOptional<z.ZodNumber>;
                  filename: z.ZodOptional<z.ZodString>;
                },
                z.core.$strip
              >
            >;
          },
          z.core.$strip
        >
      >
    >;
    overview: z.ZodOptional<z.ZodString>;
  },
  z.core.$strip
>;
export type MetaVideoSchema = z.infer<typeof metaVideoSchema>;
/**
 * Summarized collection of meta items.
 *
 * Catalogs are displayed on the Stremio's Board, Discover and Search.
 */
export declare const metaPreviewSchema: z.ZodObject<
  {
    id: z.ZodString;
    type: z.ZodEnum<{
      movie: "movie";
      series: "series";
      channel: "channel";
      tv: "tv";
    }>;
    name: z.ZodString;
    poster: z.ZodOptional<z.ZodString>;
    posterShape: z.ZodOptional<
      z.ZodEnum<{
        poster: "poster";
        square: "square";
        landscape: "landscape";
      }>
    >;
    background: z.ZodOptional<z.ZodString>;
    logo: z.ZodOptional<z.ZodURL>;
    description: z.ZodOptional<z.ZodString>;
    trailers: z.ZodOptional<
      z.ZodArray<
        z.ZodObject<
          {
            source: z.ZodString;
            type: z.ZodEnum<{
              Trailer: "Trailer";
              Clip: "Clip";
            }>;
          },
          z.core.$strip
        >
      >
    >;
  },
  z.core.$strip
>;
export type MetaPreviewSchema = z.infer<typeof metaPreviewSchema>;
/**
 * Detailed description of a meta item.
 *
 * This description is displayed when the user selects an item from the catalog.
 */
export declare const metaDetailSchema: z.ZodObject<
  {
    id: z.ZodString;
    type: z.ZodEnum<{
      movie: "movie";
      series: "series";
      channel: "channel";
      tv: "tv";
    }>;
    name: z.ZodString;
    poster: z.ZodOptional<z.ZodString>;
    posterShape: z.ZodOptional<
      z.ZodEnum<{
        poster: "poster";
        square: "square";
        landscape: "landscape";
      }>
    >;
    background: z.ZodOptional<z.ZodString>;
    logo: z.ZodOptional<z.ZodURL>;
    description: z.ZodOptional<z.ZodString>;
    trailers: z.ZodOptional<
      z.ZodArray<
        z.ZodObject<
          {
            source: z.ZodString;
            type: z.ZodEnum<{
              Trailer: "Trailer";
              Clip: "Clip";
            }>;
          },
          z.core.$strip
        >
      >
    >;
    genres: z.ZodOptional<z.ZodArray<z.ZodString>>;
    releaseInfo: z.ZodOptional<z.ZodString>;
    director: z.ZodOptional<z.ZodArray<z.ZodString>>;
    cast: z.ZodOptional<z.ZodArray<z.ZodString>>;
    imdbRating: z.ZodOptional<z.ZodString>;
    released: z.ZodOptional<z.ZodString>;
    links: z.ZodOptional<
      z.ZodArray<
        z.ZodObject<
          {
            name: z.ZodString;
            category: z.ZodString;
            url: z.ZodString;
          },
          z.core.$strip
        >
      >
    >;
    videos: z.ZodOptional<
      z.ZodArray<
        z.ZodObject<
          {
            id: z.ZodString;
            title: z.ZodString;
            released: z.ZodString;
            thumbnail: z.ZodOptional<z.ZodString>;
            streams: z.ZodOptional<
              z.ZodArray<
                z.ZodObject<
                  {
                    url: z.ZodOptional<z.ZodString>;
                    ytId: z.ZodOptional<z.ZodString>;
                    infoHash: z.ZodOptional<z.ZodString>;
                    fileIdx: z.ZodOptional<z.ZodNumber>;
                    externalUrl: z.ZodOptional<z.ZodString>;
                    title: z.ZodOptional<z.ZodString>;
                    description: z.ZodOptional<z.ZodString>;
                    name: z.ZodOptional<z.ZodString>;
                    subtitles: z.ZodOptional<
                      z.ZodArray<
                        z.ZodObject<
                          {
                            id: z.ZodString;
                            url: z.ZodString;
                            lang: z.ZodString;
                          },
                          z.core.$strip
                        >
                      >
                    >;
                    sources: z.ZodOptional<z.ZodArray<z.ZodString>>;
                    fileMustInclude: z.ZodOptional<z.ZodString>;
                    nzbUrl: z.ZodOptional<z.ZodString>;
                    servers: z.ZodOptional<z.ZodArray<z.ZodString>>;
                    rarUrls: z.ZodOptional<
                      z.ZodArray<
                        z.ZodObject<
                          {
                            url: z.ZodString;
                            bytes: z.ZodOptional<z.ZodNumber>;
                          },
                          z.core.$strip
                        >
                      >
                    >;
                    zipUrls: z.ZodOptional<
                      z.ZodArray<
                        z.ZodObject<
                          {
                            url: z.ZodString;
                            bytes: z.ZodOptional<z.ZodNumber>;
                          },
                          z.core.$strip
                        >
                      >
                    >;
                    "7zipUrls": z.ZodOptional<
                      z.ZodArray<
                        z.ZodObject<
                          {
                            url: z.ZodString;
                            bytes: z.ZodOptional<z.ZodNumber>;
                          },
                          z.core.$strip
                        >
                      >
                    >;
                    tgzUrls: z.ZodOptional<
                      z.ZodArray<
                        z.ZodObject<
                          {
                            url: z.ZodString;
                            bytes: z.ZodOptional<z.ZodNumber>;
                          },
                          z.core.$strip
                        >
                      >
                    >;
                    tarUrls: z.ZodOptional<
                      z.ZodArray<
                        z.ZodObject<
                          {
                            url: z.ZodString;
                            bytes: z.ZodOptional<z.ZodNumber>;
                          },
                          z.core.$strip
                        >
                      >
                    >;
                    behaviorHints: z.ZodOptional<
                      z.ZodObject<
                        {
                          countryWhitelist: z.ZodOptional<
                            z.ZodArray<z.ZodString>
                          >;
                          notWebReady: z.ZodOptional<z.ZodBoolean>;
                          bingeGroup: z.ZodOptional<z.ZodString>;
                          group: z.ZodOptional<z.ZodString>;
                          proxyHeaders: z.ZodOptional<
                            z.ZodObject<
                              {
                                request: z.ZodOptional<
                                  z.ZodRecord<z.ZodString, z.ZodString>
                                >;
                                response: z.ZodOptional<
                                  z.ZodRecord<z.ZodString, z.ZodString>
                                >;
                              },
                              z.core.$strip
                            >
                          >;
                          videoHash: z.ZodOptional<z.ZodString>;
                          videoSize: z.ZodOptional<z.ZodNumber>;
                          filename: z.ZodOptional<z.ZodString>;
                        },
                        z.core.$strip
                      >
                    >;
                  },
                  z.core.$strip
                >
              >
            >;
            available: z.ZodOptional<z.ZodBoolean>;
            episode: z.ZodOptional<z.ZodNumber>;
            season: z.ZodOptional<z.ZodNumber>;
            trailer: z.ZodOptional<z.ZodString>;
            trailers: z.ZodOptional<
              z.ZodArray<
                z.ZodObject<
                  {
                    url: z.ZodOptional<z.ZodString>;
                    ytId: z.ZodOptional<z.ZodString>;
                    infoHash: z.ZodOptional<z.ZodString>;
                    fileIdx: z.ZodOptional<z.ZodNumber>;
                    externalUrl: z.ZodOptional<z.ZodString>;
                    title: z.ZodOptional<z.ZodString>;
                    description: z.ZodOptional<z.ZodString>;
                    name: z.ZodOptional<z.ZodString>;
                    subtitles: z.ZodOptional<
                      z.ZodArray<
                        z.ZodObject<
                          {
                            id: z.ZodString;
                            url: z.ZodString;
                            lang: z.ZodString;
                          },
                          z.core.$strip
                        >
                      >
                    >;
                    sources: z.ZodOptional<z.ZodArray<z.ZodString>>;
                    fileMustInclude: z.ZodOptional<z.ZodString>;
                    nzbUrl: z.ZodOptional<z.ZodString>;
                    servers: z.ZodOptional<z.ZodArray<z.ZodString>>;
                    rarUrls: z.ZodOptional<
                      z.ZodArray<
                        z.ZodObject<
                          {
                            url: z.ZodString;
                            bytes: z.ZodOptional<z.ZodNumber>;
                          },
                          z.core.$strip
                        >
                      >
                    >;
                    zipUrls: z.ZodOptional<
                      z.ZodArray<
                        z.ZodObject<
                          {
                            url: z.ZodString;
                            bytes: z.ZodOptional<z.ZodNumber>;
                          },
                          z.core.$strip
                        >
                      >
                    >;
                    "7zipUrls": z.ZodOptional<
                      z.ZodArray<
                        z.ZodObject<
                          {
                            url: z.ZodString;
                            bytes: z.ZodOptional<z.ZodNumber>;
                          },
                          z.core.$strip
                        >
                      >
                    >;
                    tgzUrls: z.ZodOptional<
                      z.ZodArray<
                        z.ZodObject<
                          {
                            url: z.ZodString;
                            bytes: z.ZodOptional<z.ZodNumber>;
                          },
                          z.core.$strip
                        >
                      >
                    >;
                    tarUrls: z.ZodOptional<
                      z.ZodArray<
                        z.ZodObject<
                          {
                            url: z.ZodString;
                            bytes: z.ZodOptional<z.ZodNumber>;
                          },
                          z.core.$strip
                        >
                      >
                    >;
                    behaviorHints: z.ZodOptional<
                      z.ZodObject<
                        {
                          countryWhitelist: z.ZodOptional<
                            z.ZodArray<z.ZodString>
                          >;
                          notWebReady: z.ZodOptional<z.ZodBoolean>;
                          bingeGroup: z.ZodOptional<z.ZodString>;
                          group: z.ZodOptional<z.ZodString>;
                          proxyHeaders: z.ZodOptional<
                            z.ZodObject<
                              {
                                request: z.ZodOptional<
                                  z.ZodRecord<z.ZodString, z.ZodString>
                                >;
                                response: z.ZodOptional<
                                  z.ZodRecord<z.ZodString, z.ZodString>
                                >;
                              },
                              z.core.$strip
                            >
                          >;
                          videoHash: z.ZodOptional<z.ZodString>;
                          videoSize: z.ZodOptional<z.ZodNumber>;
                          filename: z.ZodOptional<z.ZodString>;
                        },
                        z.core.$strip
                      >
                    >;
                  },
                  z.core.$strip
                >
              >
            >;
            overview: z.ZodOptional<z.ZodString>;
          },
          z.core.$strip
        >
      >
    >;
    runtime: z.ZodOptional<z.ZodString>;
    language: z.ZodOptional<z.ZodString>;
    country: z.ZodOptional<z.ZodString>;
    awards: z.ZodOptional<z.ZodString>;
    website: z.ZodOptional<z.ZodString>;
    behaviorHints: z.ZodOptional<
      z.ZodObject<
        {
          defaultVideoId: z.ZodOptional<z.ZodString>;
        },
        z.core.$strip
      >
    >;
  },
  z.core.$strip
>;
export type MetaDetailSchema = z.infer<typeof metaDetailSchema>;
/**
 * Addon setting.
 */
export declare const manifestConfigSchema: z.ZodObject<
  {
    key: z.ZodString;
    type: z.ZodEnum<{
      number: "number";
      text: "text";
      password: "password";
      checkbox: "checkbox";
      select: "select";
    }>;
    default: z.ZodOptional<z.ZodString>;
    title: z.ZodOptional<z.ZodString>;
    options: z.ZodOptional<z.ZodArray<z.ZodString>>;
    required: z.ZodOptional<z.ZodBoolean>;
  },
  z.core.$strip
>;
export type ManifestConfigSchema = z.infer<typeof manifestConfigSchema>;
export declare const manifestExtraSchema: z.ZodObject<
  {
    name: z.ZodString;
    isRequired: z.ZodOptional<z.ZodBoolean>;
    options: z.ZodOptional<z.ZodArray<z.ZodString>>;
    optionsLimit: z.ZodOptional<z.ZodNumber>;
  },
  z.core.$strip
>;
export type ManifestExtraSchema = z.infer<typeof manifestExtraSchema>;
export declare const manifestCatalogSchema: z.ZodObject<
  {
    type: z.ZodString;
    id: z.ZodString;
    name: z.ZodString;
    genres: z.ZodOptional<z.ZodArray<z.ZodString>>;
    extra: z.ZodOptional<
      z.ZodArray<
        z.ZodObject<
          {
            name: z.ZodString;
            isRequired: z.ZodOptional<z.ZodBoolean>;
            options: z.ZodOptional<z.ZodArray<z.ZodString>>;
            optionsLimit: z.ZodOptional<z.ZodNumber>;
          },
          z.core.$strip
        >
      >
    >;
  },
  z.core.$strip
>;
export type ManifestCatalogSchema = z.infer<typeof manifestCatalogSchema>;
export declare const fullManifestResourceSchema: z.ZodObject<
  {
    name: z.ZodEnum<{
      catalog: "catalog";
      meta: "meta";
      stream: "stream";
      subtitles: "subtitles";
      addon_catalog: "addon_catalog";
    }>;
    types: z.ZodArray<z.ZodString>;
    idPrefixes: z.ZodOptional<z.ZodArray<z.ZodString>>;
  },
  z.core.$strip
>;
export type FullManifestResourceSchema = z.infer<
  typeof fullManifestResourceSchema
>;
/**
 * Used as a response for defineResourceHandler.
 */
export declare const addonCatalogSchema: z.ZodObject<
  {
    transportName: z.ZodString;
    transportUrl: z.ZodString;
    manifest: z.ZodLazy<
      z.ZodObject<
        {
          id: z.ZodString;
          name: z.ZodString;
          description: z.ZodString;
          version: z.ZodString;
          resources: z.ZodArray<
            z.ZodUnion<
              readonly [
                z.ZodEnum<{
                  catalog: "catalog";
                  meta: "meta";
                  stream: "stream";
                  subtitles: "subtitles";
                  addon_catalog: "addon_catalog";
                }>,
                z.ZodObject<
                  {
                    name: z.ZodEnum<{
                      catalog: "catalog";
                      meta: "meta";
                      stream: "stream";
                      subtitles: "subtitles";
                      addon_catalog: "addon_catalog";
                    }>;
                    types: z.ZodArray<z.ZodString>;
                    idPrefixes: z.ZodOptional<z.ZodArray<z.ZodString>>;
                  },
                  z.core.$strip
                >,
              ]
            >
          >;
          types: z.ZodArray<z.ZodString>;
          idPrefixes: z.ZodOptional<z.ZodArray<z.ZodString>>;
          catalogs: z.ZodArray<
            z.ZodObject<
              {
                type: z.ZodString;
                id: z.ZodString;
                name: z.ZodString;
                genres: z.ZodOptional<z.ZodArray<z.ZodString>>;
                extra: z.ZodOptional<
                  z.ZodArray<
                    z.ZodObject<
                      {
                        name: z.ZodString;
                        isRequired: z.ZodOptional<z.ZodBoolean>;
                        options: z.ZodOptional<z.ZodArray<z.ZodString>>;
                        optionsLimit: z.ZodOptional<z.ZodNumber>;
                      },
                      z.core.$strip
                    >
                  >
                >;
              },
              z.core.$strip
            >
          >;
          addonCatalogs: z.ZodOptional<
            z.ZodArray<
              z.ZodObject<
                {
                  type: z.ZodString;
                  id: z.ZodString;
                  name: z.ZodString;
                  genres: z.ZodOptional<z.ZodArray<z.ZodString>>;
                  extra: z.ZodOptional<
                    z.ZodArray<
                      z.ZodObject<
                        {
                          name: z.ZodString;
                          isRequired: z.ZodOptional<z.ZodBoolean>;
                          options: z.ZodOptional<z.ZodArray<z.ZodString>>;
                          optionsLimit: z.ZodOptional<z.ZodNumber>;
                        },
                        z.core.$strip
                      >
                    >
                  >;
                },
                z.core.$strip
              >
            >
          >;
          config: z.ZodOptional<
            z.ZodArray<
              z.ZodObject<
                {
                  key: z.ZodString;
                  type: z.ZodEnum<{
                    number: "number";
                    text: "text";
                    password: "password";
                    checkbox: "checkbox";
                    select: "select";
                  }>;
                  default: z.ZodOptional<z.ZodString>;
                  title: z.ZodOptional<z.ZodString>;
                  options: z.ZodOptional<z.ZodArray<z.ZodString>>;
                  required: z.ZodOptional<z.ZodBoolean>;
                },
                z.core.$strip
              >
            >
          >;
          background: z.ZodOptional<z.ZodString>;
          icon: z.ZodOptional<z.ZodString>;
          logo: z.ZodOptional<z.ZodURL>;
          contactEmail: z.ZodOptional<z.ZodString>;
          behaviorHints: z.ZodOptional<
            z.ZodObject<
              {
                adult: z.ZodOptional<z.ZodBoolean>;
                p2p: z.ZodOptional<z.ZodBoolean>;
                configurable: z.ZodOptional<z.ZodBoolean>;
                configurationRequired: z.ZodOptional<z.ZodBoolean>;
              },
              z.core.$strip
            >
          >;
          stremioAddonsConfig: z.ZodOptional<
            z.ZodObject<
              {
                issuer: z.ZodLiteral<"https://stremio-addons.net">;
                signature: z.ZodString;
              },
              z.core.$strip
            >
          >;
        },
        z.core.$strip
      >
    >;
  },
  z.core.$strip
>;
export type AddonCatalogSchema = z.infer<typeof addonCatalogSchema>;
export declare const stremioAddonsConfigSchema: z.ZodObject<
  {
    issuer: z.ZodLiteral<"https://stremio-addons.net">;
    signature: z.ZodString;
  },
  z.core.$strip
>;
export type StremioAddonsConfigSchema = z.infer<
  typeof stremioAddonsConfigSchema
>;
/**
 * The addon description and capabilities.
 *
 * The first thing to define for your addon is the manifest, which describes it's name, purpose and some technical details.
 */
export declare const manifestSchema: z.ZodObject<
  {
    id: z.ZodString;
    name: z.ZodString;
    description: z.ZodString;
    version: z.ZodString;
    resources: z.ZodArray<
      z.ZodUnion<
        readonly [
          z.ZodEnum<{
            catalog: "catalog";
            meta: "meta";
            stream: "stream";
            subtitles: "subtitles";
            addon_catalog: "addon_catalog";
          }>,
          z.ZodObject<
            {
              name: z.ZodEnum<{
                catalog: "catalog";
                meta: "meta";
                stream: "stream";
                subtitles: "subtitles";
                addon_catalog: "addon_catalog";
              }>;
              types: z.ZodArray<z.ZodString>;
              idPrefixes: z.ZodOptional<z.ZodArray<z.ZodString>>;
            },
            z.core.$strip
          >,
        ]
      >
    >;
    types: z.ZodArray<z.ZodString>;
    idPrefixes: z.ZodOptional<z.ZodArray<z.ZodString>>;
    catalogs: z.ZodArray<
      z.ZodObject<
        {
          type: z.ZodString;
          id: z.ZodString;
          name: z.ZodString;
          genres: z.ZodOptional<z.ZodArray<z.ZodString>>;
          extra: z.ZodOptional<
            z.ZodArray<
              z.ZodObject<
                {
                  name: z.ZodString;
                  isRequired: z.ZodOptional<z.ZodBoolean>;
                  options: z.ZodOptional<z.ZodArray<z.ZodString>>;
                  optionsLimit: z.ZodOptional<z.ZodNumber>;
                },
                z.core.$strip
              >
            >
          >;
        },
        z.core.$strip
      >
    >;
    addonCatalogs: z.ZodOptional<
      z.ZodArray<
        z.ZodObject<
          {
            type: z.ZodString;
            id: z.ZodString;
            name: z.ZodString;
            genres: z.ZodOptional<z.ZodArray<z.ZodString>>;
            extra: z.ZodOptional<
              z.ZodArray<
                z.ZodObject<
                  {
                    name: z.ZodString;
                    isRequired: z.ZodOptional<z.ZodBoolean>;
                    options: z.ZodOptional<z.ZodArray<z.ZodString>>;
                    optionsLimit: z.ZodOptional<z.ZodNumber>;
                  },
                  z.core.$strip
                >
              >
            >;
          },
          z.core.$strip
        >
      >
    >;
    config: z.ZodOptional<
      z.ZodArray<
        z.ZodObject<
          {
            key: z.ZodString;
            type: z.ZodEnum<{
              number: "number";
              text: "text";
              password: "password";
              checkbox: "checkbox";
              select: "select";
            }>;
            default: z.ZodOptional<z.ZodString>;
            title: z.ZodOptional<z.ZodString>;
            options: z.ZodOptional<z.ZodArray<z.ZodString>>;
            required: z.ZodOptional<z.ZodBoolean>;
          },
          z.core.$strip
        >
      >
    >;
    background: z.ZodOptional<z.ZodString>;
    icon: z.ZodOptional<z.ZodString>;
    logo: z.ZodOptional<z.ZodURL>;
    contactEmail: z.ZodOptional<z.ZodString>;
    behaviorHints: z.ZodOptional<
      z.ZodObject<
        {
          adult: z.ZodOptional<z.ZodBoolean>;
          p2p: z.ZodOptional<z.ZodBoolean>;
          configurable: z.ZodOptional<z.ZodBoolean>;
          configurationRequired: z.ZodOptional<z.ZodBoolean>;
        },
        z.core.$strip
      >
    >;
    stremioAddonsConfig: z.ZodOptional<
      z.ZodObject<
        {
          issuer: z.ZodLiteral<"https://stremio-addons.net">;
          signature: z.ZodString;
        },
        z.core.$strip
      >
    >;
  },
  z.core.$strip
>;
export type ManifestSchema = z.infer<typeof manifestSchema>;
//# sourceMappingURL=manifest.d.ts.map
