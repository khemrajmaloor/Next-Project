// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type BlogpostsDocumentDataSlicesSlice = never;

/**
 * Content for BlogPosts documents
 */
interface BlogpostsDocumentData {
  /**
   * Title field in *BlogPosts*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Please enter post title
   * - **API ID Path**: blogposts.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * BlogImage field in *BlogPosts*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: blogposts.blogimage
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  blogimage: prismic.ImageField<never>;

  /**
   * Rich text field in *BlogPosts*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blogposts.rich_text
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  rich_text: prismic.RichTextField;

  /**
   * `slices` field in *BlogPosts*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: blogposts.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<BlogpostsDocumentDataSlicesSlice>;
}

/**
 * BlogPosts document from Prismic
 *
 * - **API ID**: `blogposts`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BlogpostsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<BlogpostsDocumentData>,
    "blogposts",
    Lang
  >;

export type AllDocumentTypes = BlogpostsDocument;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      BlogpostsDocument,
      BlogpostsDocumentData,
      BlogpostsDocumentDataSlicesSlice,
      AllDocumentTypes,
    };
  }
}
