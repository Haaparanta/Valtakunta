import { Card } from "../styles";


export const Cards: Card[] = [
  {
    type: 0, // Hallitsija
    card: 1, // kortti 1 eli ässä
    title: "Kuninkaan malja", // Otsikko
    text: "Kuningas pitää puheen valitsemastaan aiheesta. Puheen aikana muut pelaajat juovat koko puheen ajan." // toiminta
  },
  {
    type: 0, // Hallitsija
    card: 2, 
    title: "Muututko kansalaiseksi?", 
    text: "Tartu juomaasi ja juo itsellesi kansan suosio. Kansa äänestää jatkatko hallitsijan roolia. Muuten tiput kansalaiseksi ja kansa äänestää uuden entistä humaltuneemman hallitsijan."
  },
  {
    type: 0, // Hallitsija
    card: 3, 
    title: "Muututko aateliseksi", 
    text: "Tartu juomaasi ja juo itsellesi kansan suosio. Kansa äänestää jatkatko hallitsijan roolia. Muuten tiput aateliseksi ja kansa äänestää uuden entistä humaltuneemman hallitsijan."
  },
  {
    type: 0, // Hallitsija
    card: 4, 
    title: "Pöydän alle", 
    text: "Valitse pelaaja kenen kanssa juot kilpaa lasin tyhjäksi. Häviöstä seuraa roolin menetys voittajalle. Kansa toimii tuomarina."
  },
  {
    type: 0, // Hallitsija
    card: 5, 
    title: "Orjuutta vastaan!", 
    text: "Jos valtakunnassasi kansalaisista puolet tai enemmän ovat orjia ja kurtisaaneja vapauta heidät kahleistaan ja laita omistajat juomaan 5 huikkaa."
  },
  {
    type: 0, // Hallitsija
    card: 6, 
    title: "Viisauden aikakausi", 
    text: "Aloita lukujono, johon seuraava vastaa aina tulevan numeron. Häviäjä juo 6."
  },
  {
    type: 0, // Hallitsija
    card: 7, 
    title: "Metsästys", 
    text: "Huuda metsästys. Laske selkeästi kymmeneen ja laukaise kivääri. Pelaajat voivat juosta laskennan aikana karkuun. Pelaaja ketä osoitat laskennan päätyttyä juo lasinsa tyhjäksi. Muista, että jos useampi pelaaja on piipun edessä ottaa jokainen osuman."
  },
  {
    type: 0, // Hallitsija
    card: 8, 
    title: "Sääntö", 
    text: "Keksi vanhan säännön tilalle uusi sääntö, joka koskee muita pelaajia. (Asennot, juomamäärät, teot, pelin dynamiikan muuttaminen…)"
  },
  {
    type: 0, // Hallitsija
    card: 9, 
    title: "Kuninkaan tarina", 
    text: "Nosta malja niin monta kertaa kuin haluat. Jokainen pelaaja tekee samoin. Jos joku luovuttaa tai ei ota kunnon hörppyjä hänestä tulee orjasi."
  },
  {
    type: 0, // Hallitsija
    card: 10, 
    title: "Hääpari", 
    text: "Parita kaksi pelaajaa, jotka juovat aina yhdessä. Anna heille keskenään jaettavaksi 10 huikkaa"
  },
  {
    type: 0, // Hallitsija
    card: 11, 
    title: "Orjien vapauttaminen", 
    text: "Anna orjille mahdollisuus juoda itsensä pois orjuudesta. Näin orjat palaavat takaisin kansalaisiksi."
  },
  {
    type: 0, // Hallitsija
    card: 12, 
    title: "Kurtisaanien vapauttaminen", 
    text: "Anna kurtisaaneille mahdollisuus juoda itsensä pois orjuudesta. Näin kurtisaanit palaavat takaisin kansalaisiksi."
  },
  {
    type: 0, // Hallitsija
    card: 13, 
    title: "Vesiputous", 
    text: "Vesiputous alkaa hallitsijasta, jonka jälkeen järjestyksessä aateliset, kansalaiset, kurtisaanit ja orjat saavat lopettaa. Tämän jälkeen hallitsija ottaa vielä yhden huikan."
  },
  {
    type: 1, // Aatelinen
    card: 1, 
    title: "Ylennys", 
    text: "Juo hallitsijaa vastaan. Enemmän juonut pääsee hallitsijaksi. Häviäjästä tulee kansalainen."
  },
  {
    type: 1, // Aatelinen
    card: 2, 
    title: "Naimakauppa", 
    text: "Sinut myydään eniten tarjoavalle vaimoksi. Muutut hänen kurtesaanikseen. Kauppa käydään huikkia juomalla."
  },
  {
    type: 1, // Aatelinen
    card: 3, 
    title: "Muututko kansalaiseksi?", 
    text: "Tartu juomaasi ja juo itsellesi kansan suosio. Kansa äänestää jatkatko aatelisen roolia. Muuten tiput kansalaiseksi."
  },

  {
    type: 1, // Aatelinen
    card: 4, 
    title: "Pöydän alle", 
    text: "Valitse pelaaja kenen kanssa juotte kilpaa lasit tyhjäksi. Häviöstä seuraa roolin menetys voittajalle. Hallitsija toimii tuomarina."
  },
  {
    type: 1, // Aatelinen
    card: 5, 
    title: "Ylempi vitonen", 
    text: "Lyö käsi keskelle pöytää. Viimeinen pelaaja joka lyö kätensä kätesi päälle juo 5."
  },
  {
    type: 1, // Aatelinen
    card: 6, 
    title: "Arvonimi", 
    text: "Valitse nimeesi etuliite esim. “herttuatar”. Jos toinen pelaaja unohtaa nimesi etuliitteen sinua puhutellessaan hän juo 6.(ei voida jakaa orjille)"
  },
  {
    type: 1, // Aatelinen
    card: 7, 
    title: "Kategoria", 
    text: "Sano kategoria. Muut luettelevat järjestyksessä kategoriaan kuuluvia asioita. Jos kategoria ei kierrä kierrosta juot myös itse 7. Jos sanoo jo sanotun asian tai ei keksi kategoriaan liittyvää sisältöä häviää. Häviäjä juo 7."
  },
  {
    type: 1, // Aatelinen
    card: 8, 
    title: "Tanssipeli", 
    text: "Aloita eleellä. Seuraava toistaa saman eleen ja jatkaa omallaan. Jos et pääse lisäämään toista elettä juot myös itse 8. Jos unohtaa jo näytetyt eleet juo 8.    "
  },
  {
    type: 1, // Aatelinen
    card: 9, 
    title: "Tarina", 
    text: "Aloita sanalla. Seuraava toistaa saman sanan ja jatkaa omallaan. Jos et pääse lisäämään toista sanaa juot myös itse 8. Jos unohtaa jo kerrotun tarinan juo 9."
  },
  {
    type: 1, // Aatelinen
    card: 10, 
    title: "Älä katso!", 
    text: "Muut pelaajat osoittavat jotain pelaajaa. Kun pelaajat ovat valmiita arvaa eniten osoitetun pelaajan nimi. Jokaisesta väärin menneestä arvauksesta kaikki muut juovat 3. (ei voida jakaa orjille)"
  },
  {
    type: 1, // Aatelinen
    card: 11, 
    title: "Ota orja", 
    text: "Valitse saman- tai alempiarvoinen pelaaja ja tee hänestä kurtisaanisi. Jaa kaikille orjille 11."
  },
  {
    type: 1, // Aatelinen
    card: 12, 
    title: "Ota jalkavaimo", 
    text: "Valitse saman- tai alempiarvoinen pelaaja ja tee hänestä kurtisaanisi. Jaa kurtisaaneille 12."
  },
  {
    type: 1, // Aatelinen
    card: 13,
    title: "Korkein aatelinen",
    text: "Kaikki muut aateliset muuttuvat kansalaisiksi. Jaa kaikille kansalaisille 13."
  }
  {
    type: 2, // Kansalainen
    card: 1, 
    title: "Vallankaappaus", 
    text: "Nouset hallitsijaksi. Järjestä vesiputous, joka pidetään arvojärjestyksessä."
  },
  {
    type: 2, // Kansalainen
    card: 2, 
    title: "Orjakauppa", 
    text: "Juo juomasi ja myy itsesi orjaksi. Muut pelaajat juovat kunnes viimeinen lopettaa ja saa omistajuuden."
  },
  {
    type: 2, // Kansalainen
    card: 3, 
    title: "Naimakauppa", 
    text: "Juo puolet juomastasi ja myy itsesi kurtisaaniksi(Huora). Muut pelaajat juovat kunnes viimeinen lopettaa ja saa omistajuuden."
  },
  {
    type: 2, // Kansalainen
    card: 4, 
    title: "Koko kylän polkupyörä", 
    text: "Olet yhden kierroksen ajan jokaisen pelaajan kurtisaani. Juo aina kun toinen juo."
  },
  {
    type: 2, // Kansalainen
    card: 5, 
    title: "Hail", 
    text: "Huuda HAIL! Viimeinen pelaaja, joka huutaa hallitsijan nimen juo viisi huikkaa. Ilman hallitsijaa huudetaan HITLER."
  },
  {
    type: 2, // Kansalainen
    card: 6, 
    title: "Lottokuponki", 
    text: "Jaa 6"
  },
  {
    type: 2, // Kansalainen
    card: 7, 
    title: "Kategoria", 
    text: "Sano kategoria. Muut luettelevat järjestyksessä kategoriaan kuuluvia asioita. Jos kategoria ei kierrä kierrosta juot myös itse 7. Jos sanoo jo sanotun asian tai ei keksi kategoriaan liittyvää sisältöä häviää. Häviäjä juo 7."
  },
  {
    type: 2, // Kansalainen
    card: 8, 
    title: "Laiva on lastattu", 
    text: "Sano “laiva on lastattu” ja keksimäsi tavara. Seuraava pelaaja tekee samoin, mutta hänen tavaransa täytyy liittyä samaan teemaan kuin ensimmäinen."
  },
  {
    type: 2, // Kansalainen
    card: 9, 
    title: "Tarina", 
    text: "Aloita sanalla. Seuraava toistaa saman sanan ja jatkaa omallaan. Jos et pääse lisäämään toista sanaa juot myös itse 8. Jos unohtaa jo kerrotun tarinan juo 8."
  },
  {
    type: 2, // Kansalainen
    card: 10, 
    title: "1,2,3,...", 
    text: "Juokaa järjestyksessä 1, 2, 3, 4,...  Äänestämällä voidaan ottaa toinen kierros."
  },
  {
    type: 2, // Kansalainen
    card: 11, 
    title: "Orjakauppa", 
    text: "Päätä arvojärjestyksessä samalta tai alemmalta itsellesi orja lisäksi juo tai anna orjallesi 11."
  },
  {
    type: 2, // Kansalainen
    card: 12, 
    title: "Naimakauppa", 
    text: "Päätä arvojärjestyksessä samalta tai alemmalta itsellesi kurtisaani(Huora) juo kurtisaanin kanssa 12."
  },
  {
    type: 2, // Kansalainen
    card: 13, 
    title: "Turnajaiset", 
    text: "Haasta toinen pelaaja valitsemaasi lajiin. Voittaja nousee aateliseksi. Häviäjä juo 13."
  },
  {
    type: 3, // Huora
    card: 1, 
    title: "Bordellin pitäjä", 
    text: "Muutut aateliseksi ja määräät itsellesi kaksi kurtisaania aatelisista ja/tai alemmista."
  },
  {
    type: 3, // Huora
    card: 2, 
    title: "Petturi", 
    text: "Muutut omistajasi orjaksi. Omistaja juo 2."
  },
  {
    type: 3, // Huora
    card: 3, 
    title: "Myrkytä itsesi", 
    text: "Juo lasisi tyhjäksi."
  },
  {
    type: 3, // Huora
    card: 4, 
    title: "Koko kylän polkupyörä.", 
    text: "Olet yhden kierroksen ajan jokaisen muun pelaajan kurtisaani. Juo aina kun toinen juo."
  },
  {
    type: 3, // Huora
    card: 5, 
    title: "Hail", 
    text: "Huuda HAIL! Viimeinen pelaaja, joka huutaa hallitsijan nimen juo viisi huikkaa. Ilman hallitsijaa huudetaan HITLER."
  },
  {
    type: 3, // Huora
    card: 6, 
    title: "Lottokuponki", 
    text: "Jaa 6"
  },
  {
    type: 3, // Huora
    card: 7, 
    title: "Kategoria", 
    text: "Häviäjä juo lasistaan seitsemän huikkaa."
  },
  {
    type: 3, // Huora
    card: 8, 
    title: "Never have I ever", 
    text: "Pelaajat, jotka ovat tehneet juovat kahdeksan huikkaa."
  },
  {
    type: 3, // Huora
    card: 9, 
    title: "Tarina", 
    text: "Häviäjä juo lasistaan yhdeksän huikkaa. (Sisällytä teemaan)"
  },
  {
    type: 3, // Huora
    card: 10, 
    title: "1, 2, 3… ", 
    text: "1, 2, 3… (orjia voi käyttää apuna)"
  },
  {
    type: 3, // Huora
    card: 11, 
    title: "Orjakauppa", 
    text: "Päätä arvojärjestyksessä kansalainen tai alempi pelaaja, joka myydään orjaksi. (Pidä huutokauppa)"
  },
  {
    type: 3, // Huora
    card: 12, 
    title: "Sisarvaimot", 
    text: "Halutessasi kaikki orjat muuttuvat omistajasi kurtisaaneiksi. Vahdi, että muut sisarvaimot juovat aina yhden ylimääräisen huikan sinua enemmän."
  },
  {
    type: 3, // Huora
    card: 13, 
    title: "Noita", 
    text: "Muutut kansalaiseksi (noidaksi). Lisäksi myrkytät omistajasi, joka joutuu juomaan lasinsa tyhjäksi."
  },
  {
    type: 4, // Orja
    card: 1, 
    title: "Hallitsija uljas pelastaa", 
    text: "Et ole enää orja sillä hallitsija tekee sinusta aatelisen. Voit tehdä entisestä omistajastasi kurtisaanisi(Huoran)."
  },
  {
    type: 4, // Orja
    card: 2, 
    title: " Kyläjuoppo", 
    text: "Sammalla ja juo aina kun joku toinen juo yhden kierroksen ajan."
  },
  {
    type: 4, // Orja
    card: 3, 
    title: "Rappio", 
    text: "Viimeistele juomasi."
  },
  {
    type: 4, // Orja
    card: 4, 
    title: "Hörppiä", 
    text: "Kippistä jokaisen pelaajan kanssa."
  },
  {
    type: 4, // Orja
    card: 5, 
    title: "Hail", 
    text: "Huuda HEIL! Viimeinen pelaaja, joka huutaa hallitsijan nimen juo 5. Ilman hallitsijaa huudetaan HITLER. (Käden nosto)"
  },
  {
    type: 4, // Orja
    card: 6, 
    title: "Shrek", 
    text: "Saat arvonimen Shrek. Jos pelaaja unohtaa mainita Shrek liitteen te molemmat juotte yhden hörpyn. (hörppy ei voi määrä orjalle)"
  },
  {
    type: 4, // Orja
    card: 7, 
    title: "Kategoria", 
    text: "Häviäjä juo lasistaan seitsemän huikkaa."
  },
  {
    type: 4, // Orja
    card: 8, 
    title: "Never have I ever", 
    text: "Pelaajat, jotka ovat tehneet juovat kahdeksan huikkaa."
  },
  {
    type: 4, // Orja
    card: 9, 
    title: "Tarina", 
    text: "Häviäjä juo lasistaan yhdeksän huikkaa."
  },
  {
    type: 4, // Orja
    card: 10, 
    title: "Lihapää", 
    text: "Kymmenen punnerrusta tai kyykkyä. Muuten kymmenen huikkaa."
  },
  {
    type: 4, // Orja
    card: 11, 
    title: "Kansanäänestys", 
    text: "Kaikki pelaajat äänestävät pääsetkö pois orjuudesta kansalaiseksi. (peukalo ylös tai alas)"
  },
  {
    type: 4, // Orja
    card: 12, 
    title: "Heruttelija", 
    text: "Muutut omistajasi kurtisaaniksi(Huoraksi). Kippistä vihjailevasti omistajasi kanssa."
  },
  {
    type: 4, // Orja
    card: 13, 
    title: "Mellakka", 
    text: "Juo kilpaa omistajaasi vastaan. Jos voitat muutut aateliseksi."
  },
];
