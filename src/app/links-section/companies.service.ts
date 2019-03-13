import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

	mockTags = [
    {
      id: 1,
      name: 'boende'
    },
    {
      id: 2,
      name: 'fest'
    },
    {
      id: 3,
      name: 'skola'
    },
    {
      id: 4,
      name: 'övrigt'
    }
  ]

	mockComapnies = [
		{
			name: "KFS",
			url: "kfs.se",
			text: "KFS Studentbokhandel ägs till 100 % av Teknologkåren vid LTH och finns fysiskt på Studiecentrum mittemot Kårhuset. Målsättningen för KFS är att det ska finnas litteratur till studenter på LTH till förmånliga priser. KFS har kommissionsförsäljning av begagnade böcker. KFS vill göra det enkelt för studenterna att införskaffa kurslitteratur och annat studiematerial under parollen ”one shop, one stop”. KFS har anpassade öppettider anpassade efter LTHs kursplan. Erbjudande under nolleveckan: handla för 700 kr och få gratis ett 5-pack kollegieblock. KFS är en kontantfri butik",
			pictureUrl: "http://nolla.nu/2018/innan/img/KFS_logga.png",
			tags: [
				"skola",
				"fest"
			]
		},
		{
			name: "KFS",
			url: "kfs.se",
      text: "KFS Studentbokhandel ägs till 100 % av Teknologkåren vid LTH och finns fysiskt på Studiecentrum mittemot Kårhuset. Målsättningen för KFS är att det ska finnas litteratur till studenter på LTH till förmånliga priser. KFS har kommissionsförsäljning av begagnade böcker. KFS vill göra det enkelt för studenterna att införskaffa kurslitteratur och annat studiematerial under parollen ”one shop, one stop”. KFS har anpassade öppettider anpassade efter LTHs kursplan. Erbjudande under nolleveckan: handla för 700 kr och få gratis ett 5-pack kollegieblock. KFS är en kontantfri butik",
			pictureUrl: "http://nolla.nu/2018/innan/img/KFS_logga.png",
			tags: [
				"skola",
				"boende"
			]
		},
    {
      name: "KFS",
      url: "kfs.se",
      text: "KFS Studentbokhandel ägs till 100 % av Teknologkåren vid LTH och finns fysiskt på Studiecentrum mittemot Kårhuset. Målsättningen för KFS är att det ska finnas litteratur till studenter på LTH till förmånliga priser. KFS har kommissionsförsäljning av begagnade böcker. KFS vill göra det enkelt för studenterna att införskaffa kurslitteratur och annat studiematerial under parollen ”one shop, one stop”. KFS har anpassade öppettider anpassade efter LTHs kursplan. Erbjudande under nolleveckan: handla för 700 kr och få gratis ett 5-pack kollegieblock. KFS är en kontantfri butik",
      pictureUrl: "http://nolla.nu/2018/innan/img/KFS_logga.png",
      tags: [
        "skola",
        "fest"
      ]
    },
    {
      name: "KFS",
      url: "kfs.se",
      text: "KFS Studentbokhandel ägs till 100 % av Teknologkåren vid LTH och finns fysiskt på Studiecentrum mittemot Kårhuset. Målsättningen för KFS är att det ska finnas litteratur till studenter på LTH till förmånliga priser. KFS har kommissionsförsäljning av begagnade böcker. KFS vill göra det enkelt för studenterna att införskaffa kurslitteratur och annat studiematerial under parollen ”one shop, one stop”. KFS har anpassade öppettider anpassade efter LTHs kursplan. Erbjudande under nolleveckan: handla för 700 kr och få gratis ett 5-pack kollegieblock. KFS är en kontantfri butik",
      pictureUrl: "http://nolla.nu/2018/innan/img/KFS_logga.png",
      tags: [
        "övrigt"
      ]
    },
    {
      name: "KFS",
      url: "kfs.se",
      text: "KFS Studentbokhandel ägs till 100 % av Teknologkåren vid LTH och finns fysiskt på Studiecentrum mittemot Kårhuset. Målsättningen för KFS är att det ska finnas litteratur till studenter på LTH till förmånliga priser. KFS har kommissionsförsäljning av begagnade böcker. KFS vill göra det enkelt för studenterna att införskaffa kurslitteratur och annat studiematerial under parollen ”one shop, one stop”. KFS har anpassade öppettider anpassade efter LTHs kursplan. Erbjudande under nolleveckan: handla för 700 kr och få gratis ett 5-pack kollegieblock. KFS är en kontantfri butik",
      pictureUrl: "http://nolla.nu/2018/innan/img/KFS_logga.png",
      tags: [
        "fest"
      ]
    },
    {
      name: "KFS",
      url: "kfs.se",
      text: "KFS Studentbokhandel ägs till 100 % av Teknologkåren vid LTH och finns fysiskt på Studiecentrum mittemot Kårhuset. Målsättningen för KFS är att det ska finnas litteratur till studenter på LTH till förmånliga priser. KFS har kommissionsförsäljning av begagnade böcker. KFS vill göra det enkelt för studenterna att införskaffa kurslitteratur och annat studiematerial under parollen ”one shop, one stop”. KFS har anpassade öppettider anpassade efter LTHs kursplan. Erbjudande under nolleveckan: handla för 700 kr och få gratis ett 5-pack kollegieblock. KFS är en kontantfri butik",
      pictureUrl: "http://nolla.nu/2018/innan/img/KFS_logga.png",
      tags: [
        "boende"
      ]
    },
    {
      name: "KFS",
      url: "kfs.se",
      text: "KFS Studentbokhandel ägs till 100 % av Teknologkåren vid LTH och finns fysiskt på Studiecentrum mittemot Kårhuset. Målsättningen för KFS är att det ska finnas litteratur till studenter på LTH till förmånliga priser. KFS har kommissionsförsäljning av begagnade böcker. KFS vill göra det enkelt för studenterna att införskaffa kurslitteratur och annat studiematerial under parollen ”one shop, one stop”. KFS har anpassade öppettider anpassade efter LTHs kursplan. Erbjudande under nolleveckan: handla för 700 kr och få gratis ett 5-pack kollegieblock. KFS är en kontantfri butik",
      pictureUrl: "http://nolla.nu/2018/innan/img/KFS_logga.png",
      tags: [
        "skola"
      ]
    },
    {
      name: "KFS",
      url: "kfs.se",
      text: "KFS Studentbokhandel ägs till 100 % av Teknologkåren vid LTH och finns fysiskt på Studiecentrum mittemot Kårhuset. Målsättningen för KFS är att det ska finnas litteratur till studenter på LTH till förmånliga priser. KFS har kommissionsförsäljning av begagnade böcker. KFS vill göra det enkelt för studenterna att införskaffa kurslitteratur och annat studiematerial under parollen ”one shop, one stop”. KFS har anpassade öppettider anpassade efter LTHs kursplan. Erbjudande under nolleveckan: handla för 700 kr och få gratis ett 5-pack kollegieblock. KFS är en kontantfri butik",
      pictureUrl: "http://nolla.nu/2018/innan/img/KFS_logga.png",
      tags: [
        "övrigt"
      ]
    }
	]

  constructor() { }

  getCompanies() { return this.mockComapnies }

  getTags() { return this.mockTags }
}
