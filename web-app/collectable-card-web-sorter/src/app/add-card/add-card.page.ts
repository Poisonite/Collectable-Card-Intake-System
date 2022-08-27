// Core+
import { Component, OnInit } from '@angular/core';

// Forms
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ScryfallService } from '../services/scryfall/scryfall.service';

// Services
import { UiTemplatesService } from '../services/ui-templates/ui-templates.service';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.page.html',
  styleUrls: ['./add-card.page.scss'],
})
export class AddCardPage implements OnInit {
  // add card form storage
  findCardForm: FormGroup;

  // Turns a UI spinner on and off to represent the form being saved/submitted
  searchingCardDB: boolean = false; // This line might not add value, remove when done if it's useless

  constructor(
    private formBuilder: FormBuilder,
    private uiTemplatesService: UiTemplatesService,
    private scryfallService: ScryfallService
  ) {}

  async submitCardSearch() {
    // 0. Define our loaders and alerts
    const searchingCardSpinner = this.uiTemplatesService.createLoadingSpinner(
      'Populating Search, please wait...'
    );
    const searchingValidError = this.uiTemplatesService.createSingleActionAlert(
      'Invalid Form',
      `Not all fields are valid, please correct before proceeding!<br><br>
       Error Code: <strong>CCIS-001</strong>`
    );

    // 1. Start the process to submit the data to our card DB API
    this.searchingCardDB = !this.searchingCardDB; // This line might not add value, remove when done if it's useless
    // (await searchingCardSpinner).present(); // Uncomment once steps 2 through 7 are complete

    // 2. Verify form validity
    if (this.findCardForm.valid) {
      // 3. Get our form input
      const searchQuery = this.findCardForm.controls.searchBar.value;

      // 4. Build our API call
      this.scryfallService.searchCards(`${searchQuery}`);

      // 5. Fetch card results with API call

      // 6. Prep search results UI for user

      // 7. Update UI with search results

      // 8. Dismiss loading UI once all other tasks have completed
      // this.searchingCardDB = !this.searchingCardDB; // This line might not add value, remove when done if it's useless
      // (await this.searchingCardSpinner).dismiss(); // Uncomment once steps 2 through 7 are complete
    } else {
      // Use a timeout so that it's clear to the user that the site checked the form before sending back an error
      setTimeout(async () => {
        // Dismiss loading UI because we can't proceed
        this.searchingCardDB = !this.searchingCardDB; // This line might not add value, remove when done if it's useless
        (await searchingCardSpinner).dismiss();

        // Show error message
        (await searchingValidError).present();
      }, 1200);
    }
  }

  ngOnInit() {
    // card search form declaration
    this.findCardForm = this.formBuilder.group({
      searchBar: new FormControl('', [Validators.required]),
    });
  }
}
