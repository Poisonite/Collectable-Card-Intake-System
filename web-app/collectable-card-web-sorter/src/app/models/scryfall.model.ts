enum CardLegalities {
  legal = 'legal',
  not_legal = 'not_legal',
  restricted = 'restricted',
  banned = 'banned',
}

enum Colors {
  W = 'W',
  U = 'U',
  B = 'B',
  R = 'R',
  G = 'G',
}

enum Finishes {
  foil = 'foil',
  nonfoil = 'nonfoil',
  etched = 'etched',
  glossy = 'glossy',
}

enum FrameEffects {
  legendary = 'legendary',
  miracle = 'miracle',
  nyxtouched = 'nyxtouched',
  draft = 'draft',
  devoid = 'devoid',
  tombstone = 'tombstone',
  colorshifted = 'colorshifted',
  inverted = 'inverted',
  sunmoondfc = 'sunmoondfc',
  compasslanddfc = 'compasslanddfc',
  originpwdfc = 'originpwdfc',
  mooneldrazidfc = 'mooneldrazidfc',
  waxingandwaningmoondfc = 'waxingandwaningmoondfc',
  showcase = 'showcase',
  extendedart = 'extendedart',
  companion = 'companion',
  etched = 'etched',
  snow = 'snow',
  lesson = 'lesson',
}

enum GameTypes {
  paper = 'paper',
  arena = 'arena',
  mtgo = 'mtgo',
}

const colorList = Object.keys(Colors) as Array<keyof typeof Colors>;
interface CardFaces {
  artist?: string;
  cmc?: number;
  color_indicator?: typeof colorList;
  colors?: typeof colorList;
  flavor_text?: string;
  illustration_id?: string;
  image_uris?: {
    small: string;
    normal: string;
    large: string;
    png: string;
    art_crop: string;
    border_crop: string;
  };
  layout?: string;
  loyalty?: string;
  mana_cost: string;
  name: string;
  object: string;
  oracle_id?: string;
  oracle_text?: string;
  power?: string;
  printed_name?: string;
  printed_text?: string;
  printed_type_line?: string;
  toughness?: string;
  type_line?: string;
  watermark?: string;
}

interface RelatedCards {
  id: string;
  object: string;
  component: string;
  name: string;
  type_line: string;
  uri: string;
}

const finishesList = Object.keys(Finishes) as Array<keyof typeof Finishes>;
const frameEffectsList = Object.keys(FrameEffects) as Array<
  keyof typeof FrameEffects
>;
const gameTypesList = Object.keys(GameTypes) as Array<keyof typeof GameTypes>;
export interface Card {
  // Core Fields
  arena_id?: number;
  id: string;
  lang: string;
  mtgo_id?: number;
  mtgo_foil_id?: number;
  multiverse_ids?: Array<number>;
  tcgplayer_id?: number;
  tcgplayer_etched_id?: number;
  cardmarket_id?: number;
  object: string;
  oracle_id: string;
  prints_search_uri: string;
  rulings_uri: string;
  scryfall_uri: string;
  uri: string;
  // Gameplay Fields
  all_parts?: Array<RelatedCards>;
  card_faces?: Array<CardFaces>;
  cmc: number;
  color_identity: typeof colorList;
  color_indicator?: typeof colorList;
  colors?: typeof colorList;
  edhrec_rank?: number;
  hand_modifier?: string;
  keywords: Array<string>;
  layout: string;
  legalities: { [key: string]: CardLegalities };
  life_modifier?: string;
  loyalty?: string;
  mana_cost?: string;
  name: string;
  oracle_text?: string;
  oversized: boolean;
  penny_rank?: number;
  power?: string;
  produced_mana?: typeof colorList;
  reserved: boolean;
  toughness?: string;
  type_line: string;
  //Print Fields
  artist?: string;
  booster: boolean;
  border_color: string;
  card_back_id: string;
  collector_number: string;
  content_warning?: boolean;
  digital: boolean;
  finishes: typeof finishesList;
  flavor_name?: string;
  flavor_text?: string;
  frame_effects?: typeof frameEffectsList;
  frame: string;
  full_art: boolean;
  games: typeof gameTypesList;
  highres_image: boolean;
  illustration_id?: string;
  image_status: string;
  image_uris: {
    small: string;
    normal: string;
    large: string;
    png: string;
    art_crop: string;
    border_crop: string;
  };
  prices: {
    usd: string;
    usd_foil: string;
    usd_etched: string;
    eur: string;
    tix: string;
  };
  printed_name?: string;
  printed_text?: string;
  printed_type_line?: string;
  promo: boolean;
  promo_types?: Array<string>;
  purchase_uris?: {
    tcgplayer: string;
    cardmarket: string;
    cardholder: string;
  };
  rarity?: string;
  related_uris?: {
    gatherer: string;
    tcgplayer_infinite_articles: string;
    tcgplayer_infinite_decks: string;
    edhrec: string;
  };
  released_at?: Date;
  reprint?: boolean;
  scryfall_set_string?: string;
  set_name?: string;
  set_search_string?: string;
  set_type?: string;
  set_string?: string;
  set: string;
  set_id: string;
  story_spotlight: boolean;
  textless: boolean;
  variation: boolean;
  variation_of?: string;
  secstringty_stamp?: string;
  watermark?: string;
  preview: {
    previewed_at?: Date;
    source_string?: string;
    source?: string;
  };
  //
}
