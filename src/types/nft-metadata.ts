export interface NftMetadataAttribute {
  display_type?: string;
  trait_type?: string;
  value?: string | number;
}

export interface NftMetadata {
  image?: string;
  image_data?: string;
  external_url?: string;
  description?: string;
  name?: string;
  background_color?: string;
  animation_url?: string;
  youtube_url?: string;
  attributes?: NftMetadataAttribute[];
}
