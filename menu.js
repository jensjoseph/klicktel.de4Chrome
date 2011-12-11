
var mainMenu = [ 
	"0|100|Fast Food||9|fastfood_hauptmenue.png",
	"0|200|Restaurant||15|restaurant_hauptmenue.png",
	"0|300|Hotel||4|hotel_hauptmenue.png",
	"0|400|Taxi||4|taxi_hauptmenue.png",
	"0|500|Unterwegs||9|unterwegs_hauptmenue.png",
	"0|600|Automobil||12|auto_hauptmenue.png",
	"0|700|Gesundheit||15|gesundheit_hauptmenue.png",
	"0|800|Notfall||6|notfall_hauptmenue.png",
	"0|900|Shop||11|shop_hauptmenue.png",
//	"0|1000|Geldautomat||12|ec_hauptmenue.png",
	"0|1100|Service-Nr||15|service_hauptmenue.png"
];

var subMenus = [ "100", "200", "300", "400", "500", "600", "700", "800", "900", "1000", "1100" ];

subMenus["100"] = [ 
	"100|101|Burger|Burger|0|fastfood_burger.png",
	"100|102|Imbiss|y3AppImbiss|0|fastfood_imbiss.png",
	"100|103|Pizzataxi|y3AppPizzaTaxi|0|fastfood_pizza.png",
	"100|104|D&ouml;ner|y3AppD&ouml;ner|0|fastfood_doener.png",
	"100|105|Asiatisch|y3AppFastFoodAsiatisch|0|fastfood_asiatisch.png",
//	"100|106|24 Stunden|Fast Food - 24h|0|fastfood_24.png",
	"100|107|Sandwich|Sandwich|0|fastfood_baguette.png",
	"100|108|Fisch|Fast Fisch|0|fastfood_fisch.png",
	"100|109|Back-Shops|y3AppSBB&auml;ckereien|0|fastfood_backshop.png"
];

subMenus["200"] = [
	"200|201|Alle|y3AppRestaurantsAlle|0|restaurant_alle.png",
	"200|202|Deutsch|y3AppRestaurantsDeutsch|0|restaurant_deutsch.png",
	"200|203|Italienisch|y3AppRestaurantsItalienisch|0|restaurant_italienisch.png",
	"200|204|Griechisch|y3AppRestaurantsGriechisch|0|restaurant_griechisch.png",
	"200|205|Chinesisch|y3AppRestaurantsChinesisch|0|restaurant_chinesisch.png",
	"200|206|Steakhaus|y3AppRestaurantsSteakh&auml;user|0|restaurant_steak.png",
	"200|207|T&uuml;rkisch|y3AppRestaurantsT&uuml;rkisch|0|restaurant_tuerkisch.png",
	"200|208|Fisch|y3AppRestaurantsFischspezialit&auml;ten|0|restaurant_fisch.png",
	"200|209|Sushi|y3AppRestaurantsSushi|0|restaurant_sushi.png",
	"200|210|Mexikanisch|y3AppRestaurantsMexikanisch|0|restaurant_mexikanisch.png",
	"200|211|Indisch|y3AppRestaurantsIndisch|0|restaurant_indisch.png",
	"200|212|Franz&ouml;sisch|y3AppRestaurantsFranz&ouml;sisch|0|restaurant_franzoesisch.png",
	"200|213|Cafes|y3AppCafes|0|restaurant_cafe.png",
	"200|214|Biergarten|y3AppBierg&auml;rten|0|restaurant_biergarten.png",
	"200|215|Eiscafé|y3AppEisdielen|0|restaurant_eiscafe.png"
];

subMenus["300"] = [
	"300|301|Hotel|y3AppHotels|0|hotel_hotel.png",
	"300|302|Pension|y3AppPensionen|0|hotel_pension.png",
	"300|303|Jugendherb.|y3AppJugendherbergen|0|hotel_jugendherberge.png",
	"300|304|Ferienwhg|y3AppFerienwohnungen|0|hotel_ferienwohnung.png"
];

subMenus["400"] = [
	"400|401|Taxi|y3AppTaxiunternehmen|0|taxi_taxi.png",
	"400|402|Taxi 24|y3AppTaxizentralen|0|taxi_24h.png",
	"400|403|Kurierdienst|y3AppKurierdienste|0|taxi_kurier.png",
	"400|404|Krankentrans.|y3AppKrankentransporte|0|taxi_transport.png"
];

subMenus["500"] = [
//	"500|501|Radar|Radar|0|unterwegs_radarfalle.png",
//	"500|502|Stau|Staus|0|unterwegs_verkehr.png",
	"500|503|Tanken|Tanken|0|unterwegs_tanken.png",
	"500|504|Autogas|Tanken - Autogas|0|unterwegs_autogas.png",
	"500|505|Tanken 24|Tanken - 24h|0|unterwegs_tanken24.png",
	"500|506|Tanken AB|Tanken - Autobahn|0|unterwegs_tankenAB.png",
	"500|507|Tank+Shop|Tanken - mit Shop|0|unterwegs_tankshop.png",
	"500|508|Mietwagen|y3AppAutovermietung|0|unterwegs_autovermietung.png",
	"500|509|Pannendienst|y3AppRufPannendienst|0|unterwegs_pannendienst.png"
];

subMenus["600"] = [
	"600|601|Werkstatt|y3AppAutowerkst&auml;tten|0|auto_service.png",
	"600|602|VW|KFZService - VW|0|auto_vw.png",
	"600|603|Mercedes|KFZService - Mercedes|0|auto_mercedes.png",
	"600|604|BMW|KFZService - BMW|0|auto_bmw.png",
	"600|605|Opel|KFZService - Opel|0|auto_opel.png",
	"600|606|Audi|KFZService - Audi|0|auto_audi.png",
	"600|607|Reifen|y3AppAutoReifen|0|auto_reifen.png",
	"600|608|Autozubeh&ouml;r|y3AppAutoteile|0|auto_zubehoer.png",
	"600|609|ADAC & Co|y3AppAutomobilclubs|0|auto_clubs.png",
	"600|610|Fahrschule|y3AppAutoFahrschulen|0|auto_fahrschule.png",
	"600|611|Zulassung|y3AppKfzZulassungsstellenAmtliche|0|auto_zulassung.png",
	"600|612|Motorrad|y3AppMotorr&auml;der|0|auto_motorrad.png"
];

subMenus["700"] = [
	"700|701|Apotheke|y3AppApotheken|0|gesundheit_apotheke.png",
	"700|702|Notapotheke|Notapotheke|0|gesundheit_notapotheke.png",
	"700|703|Krankenhaus|y3AppKrankenh&auml;user|0|gesundheit_krankenhaus.png",
	"700|704|Allg.-Arzt|y3AppAllgemein&auml;rzte|0|gesundheit_allgemeinarzt.png",
	"700|705|Zahnarzt|y3AppZahn&auml;rzte|0|gesundheit_zahnarzt.png",
	"700|706|Orthop&auml;de|y3AppOrthop&auml;den|0|gesundheit_orthopaede.png",
	"700|707|Frauenarzt|y3AppFrauen&auml;rzte|0|gesundheit_frauenarzt.png",
	"700|708|Kinderarzt|y3AppKinder&auml;rzte|0|gesundheit_kinderarzt.png",
	"700|709|Hautarzt|y3AppDermatologen|0|gesundheit_hautarzt.png",
	"700|710|Augenarzt|y3AppAugen&auml;rzte|0|gesundheit_augenarzt.png",
	"700|711|HNO-Arzt|y3App&Auml;rzteHNO|0|gesundheit_hno.png",
	"700|712|Massage|y3AppMassagepraxen|0|gesundheit_physio.png",
	"700|713|Optiker|y3AppOptiker|0|gesundheit_optiker.png",
	"700|714|Tierarzt|y3AppTier&auml;rzte|0|gesundheit_tier.png",
	"700|715|Krankenvers.|y3AppKrankenversicherungen|0|gesundheit_versicherung.png"
];

subMenus["800"] = [
	"800|801|Kartensperr.|y3AppRufKartensperrung|0|notfall_kartensperrung.png",
	"800|802|Notapotheke|Notapotheke|0|notfall_apotheke.png",
	"800|803|Med. Notfall|y3AppRufMedNotfall|0|notfall_notdienst.png",
	"800|804|Polizei|y3AppPolizei|0|notfall_polizei.png",
	"800|805|Feuerwehr|y3AppFeuerwehr|0|notfall_feuerwehr.png",
	"800|806|Schl&uuml;sseld.|y3AppSchl&uuml;sseldienste|0|notfall_schluesseldienst.png"
];

subMenus["900"] = [
	"900|901|Lebensmittel|y3AppLebensmittel|0|shop_lebensmittel.png",
	"900|902|Bekleidung|y3AppBekleidung|0|shop_bekleidung.png",
	"900|903|B&auml;cker|y3AppB&auml;ckereien|0|shop_baecker.png",
	"900|904|Getr&auml;nke|y3AppGetr&auml;nke|0|shop_getraenke.png",
	"900|905|Metzger|y3AppMetzgereien|0|shop_metzger.png",
	"900|906|Baumarkt|y3AppBaum&auml;rkte|0|shop_baumarkt.png",
	"900|907|Multimedia|y3AppMultimedia|0|shop_multimedia.png",
	"900|908|Computer|y3AppComputerFachgeschäfte|0|shop_computer.png",
	"900|909|Schuhe|y3AppSchuhgeschäfte|0|shop_schuhe.png",
	"900|910|M&ouml;bel|y3AppM&ouml;bel|0|shop_moebel.png",
	"900|911|Blumen|y3AppBlumen|0|shop_blumen.png"
];

subMenus["1000"] = [
	"1000|1001|Sparkasse|Geldautomaten - Sparkasse|0|ec_sparkasse.png",
	"1000|1002|Volksbank|Geldautomaten - VR-Bank|0|ec_volksbank.png",
	"1000|1003|Postbank|Geldautomaten - Postbank|0|ec_postbank.png",
	"1000|1004|Commerz|Geldautomaten - Commerzbank|0|ec_commerzbank.png",
	"1000|1005|Deutsche|Geldautomaten - Deutsche Bank|0|ec_deutschebank.png",
	"1000|1006|Sparda|Geldautomaten - Sparda Bank|0|ec_sparda.png",
	"1000|1007|ING-DiBa|Geldautomaten - ING-DiBa|0|ec_ingdiba.png",
	"1000|1008|Targobank|Geldautomaten - Targobank|0|ec_targo.png",
	"1000|1009|HypoVereins|Geldautomaten - HypoVereinsbank|0|ec_hypo.png",
	"1000|1010|Alle|Geldautomaten|0|ec_alle.png",
	"1000|1011|Cashgroup|Cash Group|0|ec_cashgroup.png",
	"1000|1012|Cashpool|Cash Pool|0|ec_cashpool.png"
];

subMenus["1100"] = [
	"1100|1101|Kartensperr.|y3AppRufKartensperrung|0|service_kartensperre.png",
	"1100|1102|Banken|y3AppRufBankenKeineKartensperrung|0|service_bank.png",
	"1100|1103|Kfz-Vers.|y3AppRufKfzVersicherungen|0|service_kfz_vers.png",
	"1100|1104|Krankenvers.|y3AppRufKrankenversicherungen|0|service_krankenvers.png",
	"1100|1105|Rechtsschutz|y3AppRufRechtsschutzversicherungen|0|service_rechtsschutz.png",
	"1100|1106|Haftpflicht|y3AppRufHaftpflichtversicherungen|0|service_haftpflicht.png",
	"1100|1107|Lebensvers.|y3AppRufLebensversicherungen|0|service_lebensvers.png",
	"1100|1108|Anwaltsnotd.|y3AppRufAnwaltsnotdienste|0|service_anwalt.png",
	"1100|1109|Beh&ouml;rden|y3AppRufBeh&ouml;rden|0|service_amt.png",
	"1100|1110|Mobilfunk|y3AppRufMobilfunk|0|service_mobilfunk.png",
	"1100|1111|Internet|y3AppRufInternet|0|service_internet.png",
	"1100|1112|Elektro|y3AppRufElektroger&auml;te|0|service_elektrogeraete.png",
	"1100|1113|Hifi|y3AppRufHiFiVideo|0|service_hifi.png",
//	"1100|1114|Navi & Handy|y3AppRufHandyNaviHersteller|0|service_handy.png",
	"1100|1115|Computer|y3AppRufComputerhersteller|0|service_computer.png"
];
