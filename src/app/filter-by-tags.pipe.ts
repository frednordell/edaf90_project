import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByTags',
  pure: false 
})
export class FilterByTagsPipe implements PipeTransform {

  transform(items, tags): any {
        var filtered = []; // Put here only items that match
        //console.log(items)
        //console.log(tags)
        if (tags.length === 0) {
        	return items;
        }
        (items || []).forEach(function (item) { // Check each item
            var matches = tags.some(function (tag) {          // If there is some tag
                return (item.tags.indexOf(tag.name) > -1); 		// that is a substring of any property's value
            });                                               // we have a match
            if (matches) {           // If it matches
                filtered.push(item); // put it into the `filtered` array
            }
        });
        //return items;
        return filtered; // Return the array with items that match any tag
    };
}
