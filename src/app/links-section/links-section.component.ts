import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent, MatChipInputEvent } from '@angular/material';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-links-section',
  templateUrl: './links-section.component.html',
  styleUrls: ['./links-section.component.scss']
})
export class LinksSectionComponent implements OnInit {
	companies = [
		{
			name: "KFS",
			url: "kfs.se",
			text: "lorem ipsumasd naskldnsa ödknas dölkasndlkasnd laksöndlaskndaslkjdasjkd skljfb sakdjhas kdjasdasdasdasd asdsal kjdnasl kjdnsakj dnalskjnd kasljnd askjdn aksljndsa kldnsakl jdnksand kjlasndkas",
			pictureUrl: "kfs.se/nångot",
			tags: [
				"plugg",
				"fest"
			]
		},
		{
			name: "KFS",
			url: "kfs.se",
			text: "lorem ipsumasd naskldnsa ödknas dölkasndlkasnd laksöndlaskndaslkjdasjkd skljfb sakdjhas kdjasdasdasdasd asdsal kjdnasl kjdnsakj dnalskjnd kasljnd askjdn aksljndsa kldnsakl jdnksand kjlasndkas",
			pictureUrl: "kfs.se/nångot",
			tags: [
				"plugg",
				"boende"
			]
		}
	];

	visible = true;
  selectable = true;
  removable = true;
  addOnBlur = false;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  tagCtrl = new FormControl();
  filteredTags: Observable<string[]>;
  tags: any = [];
  allTags: any = [
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
  ];

  @ViewChild('tagInput') tagInput: ElementRef;
	placeholder = "Filtrera på taggar"

  constructor() {
  	this.filteredTags = this.tagCtrl.valueChanges.pipe(
      startWith(null),
      map((tag: string | null) => tag ? this._filter(tag) : this.allTags.slice()));
  }


   add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    // Add our tag
    if ((value || '').trim()) {
      this.tags.push({
          id:Math.random(),
          name:value.trim().toLowerCase()
      });
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.tagCtrl.setValue(null);
  }

  remove(tag, indx): void {
    this.tags.splice(indx, 1);
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.tags.push(event.option.value);
    this.tagInput.nativeElement.value = '';
    this.tagCtrl.setValue(null);
  }

  private _filter(value: any): any[] {
  	const name = value.name || value
    return this.allTags.filter(tag => tag.name.toLowerCase().includes(name.toLowerCase()));;
  }

  ngOnInit() {
  }

}
