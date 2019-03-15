import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent, MatChipInputEvent } from '@angular/material';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Company } from '../../models/company';
import { CompaniesService } from './companies.service';


@Component({
  selector: 'app-links-section',
  templateUrl: './links-section.component.html',
  styleUrls: ['./links-section.component.scss']
})
export class LinksSectionComponent implements OnInit {
	companies: Array<Company> = [];

	visible = true;
  selectable = true;
  removable = true;
  addOnBlur = false;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  tagCtrl = new FormControl();
  filteredTags: Observable<string[]>;
  tags: Array<{name: string, id: number}> = [];
  allTags: Array<{name: string, id: number}> = [];

  @ViewChild('tagInput') tagInput: ElementRef;
	placeholder = "Filtrera på taggar"

  constructor(private companiesService: CompaniesService) {
  	this.filteredTags = this.tagCtrl.valueChanges.pipe(
      startWith(null),
      map((tag: string | null) => tag ? this._filter(tag) : this.allTags.slice()));
  }

  ngOnInit() {
    this.companiesService.getTags().subscribe((tag) => this.allTags.push(tag))
    this.companiesService.getCompanies().subscribe((company) => this.companies.push(company))
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

}
