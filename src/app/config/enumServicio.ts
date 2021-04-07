enum enumServicio {
    header_seguridad_services         = 'token',
    url_services_sube_archivo         = 'sube',
    url_services_descarga_archivo     = 'descarga',
    url_services_usuario              = 'usuario',
    url_services_login                = 'api/usuario/login',
    url_cantidad_post                 = 'api/analisis_sentimiento/query_cantidad_post_',
    url_menciones_t                   = 'api/analisis_sentimiento/query_menciones_t_',
    url_analisis_sentimiento          = 'api/analisis_sentimiento/query_menciones_',
    url_palabras                      = 'api/analisis_sentimiento/query_serie_',
    url_top_twitter                   = 'api/analisis_sentimiento/query_post_usuario_',
    url_mensiones_positivas_populares = 'api/analisis_sentimiento/query_post_positivos_',
    url_mensiones_negativas_populares = 'api/analisis_sentimiento/query_post_negativos_',
}

export default enumServicio;