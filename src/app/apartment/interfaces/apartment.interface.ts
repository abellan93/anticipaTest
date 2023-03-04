export interface InfoApartments {
  jsonapi: Jsonapi;
  data: Datum[];
  meta: ApartmentMeta;
  links: ApartmentLinks;
}

export interface Datum {
  type: DatumType;
  id: string;
  links: DatumLinks;
  attributes: Attributes;
  relationships: Relationships;
}

export interface Attributes {
  drupal_internal__nid: number;
  drupal_internal__vid: number;
  langcode: Langcode;
  revision_timestamp: Date;
  revision_log: null;
  status: boolean;
  title: string;
  created: Date;
  changed: Date;
  promote: boolean;
  sticky: boolean;
  default_langcode: boolean;
  revision_translation_affected: boolean;
  path: Path;
  content_translation_source: ContentTranslationSource;
  content_translation_outdated: boolean;
  boosted: boolean;
  field_inmu_acti_camp: string;
  field_inmu_aire: boolean;
  field_inmu_area_cons: string;
  field_inmu_asce: boolean;
  field_inmu_cale: boolean;
  field_inmu_camp_iden: FieldInmuCampIden[];
  field_inmu_clas_ener_letr: FieldInmuClasEnerLetr;
  field_inmu_clas_ener_url: null;
  field_inmu_code: string;
  field_inmu_code_post: string;
  field_inmu_code_prom: FieldInmuCodeProm;
  field_inmu_deco_view_url: null;
  field_inmu_desc: FieldInmuDesc;
  field_inmu_dire: string;
  field_inmu_esta: number;
  field_inmu_esta_desc: FieldInmuEstaDesc;
  field_inmu_gara: boolean;
  field_inmu_id: string;
  field_inmu_imag_arra: string[];
  field_inmu_imag_zona_arra: FieldInmuImagZonaArra[];
  field_inmu_lati: number;
  field_inmu_long: number;
  field_inmu_nomb_call: string;
  field_inmu_nume_bano: number;
  field_inmu_nume_call: number;
  field_inmu_nume_dorm: number;
  field_inmu_nume_gara: number;
  field_inmu_nume_habi: number;
  field_inmu_nume_tras: number;
  field_inmu_orig: FieldInmuOrig;
  field_inmu_peso_orde: number;
  field_inmu_pisc: boolean;
  field_inmu_pisc_comu: boolean;
  field_inmu_prec: string;
  field_inmu_prec_orig: string;
  field_inmu_prov: string;
  field_inmu_refe: string;
  field_inmu_reservation_allowed: boolean;
  field_inmu_subt: string;
  field_inmu_supe: string;
  field_inmu_terr: boolean;
  field_inmu_tipo: null | string;
  field_inmu_tipo_sin_agru: FieldInmuTipoSinAgru;
  field_inmu_tipo_via: FieldInmuTipoVia;
  field_inmu_titl: string;
  field_inmu_tras: boolean;
  field_inmu_url_pdf: null;
  field_inmu_vinc: string[];
  has_floorfy: boolean;
  meta_description: string;
  meta_title: string;
  pre_reserva: boolean;
  relevancy: number;
  reservado_online: boolean;
  videocall: boolean;
}

export enum ContentTranslationSource {
  Und = 'und',
}

export enum FieldInmuCampIden {
  Vicas = 'VICAS',
}

export enum FieldInmuClasEnerLetr {
  C = 'C',
  D = 'D',
  E = 'E',
  G = 'G',
  I = 'I',
}

export enum FieldInmuCodeProm {
  Al377 = 'AL377',
  Al610 = 'AL610',
  Al762 = 'AL762',
  Nopromo = 'nopromo',
}

export interface FieldInmuDesc {
  value: string;
  format: null;
  processed: string;
}

export enum FieldInmuEstaDesc {
  LibreVenta = 'Libre Venta',
}

export enum FieldInmuImagZonaArra {
  SD = 's/d',
}

export enum FieldInmuOrig {
  Al0001 = 'AL0001',
  Al0002 = 'AL0002',
  Al2028 = 'AL2028',
}

export enum FieldInmuTipoSinAgru {
  Casas = 'Casas',
  Locales = 'Locales',
  Naves = 'Naves',
  Parcelas = 'Parcelas',
  Parkings = 'Parkings',
  Pisos = 'Pisos',
  Trasteros = 'Trasteros',
}

export enum FieldInmuTipoVia {
  Avenida = 'Avenida',
  Calle = 'Calle',
  Camino = 'Camino',
  Cjto = 'Cjto',
  Poligono = 'Poligono',
  Praje = 'Praje',
  Urbanización = 'Urbanización',
}

export enum Langcode {
  Es = 'es',
}

export interface Path {
  alias: null;
  pid: null;
  langcode: Langcode;
}

export interface DatumLinks {
  self: Last;
}

export interface Last {
  href: string;
}

export interface Relationships {
  node_type: NodeType;
  revision_uid: District;
  uid: District;
  district: District;
  field_inmu_portal: District;
  field_society: District;
  municipality: District;
  province: District;
  tipology: District;
}

export interface District {
  data: Data | null;
  links: DistrictLinks;
}

export interface Data {
  type: DataType;
  id: string;
  meta: DataMeta;
}

export interface DataMeta {
  drupal_internal__target_id: number;
}

export enum DataType {
  TaxonomyTermMunicipalities = 'taxonomy_term--municipalities',
  TaxonomyTermPortals = 'taxonomy_term--portals',
  TaxonomyTermProvinces = 'taxonomy_term--provinces',
  TaxonomyTermTipology = 'taxonomy_term--tipology',
  UserUser = 'user--user',
}

export interface DistrictLinks {
  related: Last;
  self: Last;
}

export interface NodeType {
  data: null;
  links: DatumLinks;
}

export enum DatumType {
  NodeInmuebles = 'node--inmuebles',
}

export interface Jsonapi {
  version: string;
  meta: JsonapiMeta;
}

export interface JsonapiMeta {
  links: DatumLinks;
}

export interface ApartmentLinks {
  last: Last;
  next: Last;
  self: Last;
}

export interface ApartmentMeta {
  count: string;
}
