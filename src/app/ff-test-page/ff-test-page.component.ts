import {Component} from '@angular/core';
import {finalize} from 'rxjs/operators';
import { QuoteService } from '@app/shared/services/quote/quote.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Quote} from '@app/shared/models/quote';

@Component({
  selector: 'app-ff-test-page',
  templateUrl: './ff-test-page.component.html',
  styleUrls: ['./ff-test-page.component.scss']
})
export class FfTestPageComponent {

  isLoading: boolean;
  fetchError: boolean;
  searchForm: FormGroup;
  searchListResult: Array<Quote>;

  constructor(public fb: FormBuilder,
              private quoteService: QuoteService) {
    this.initForm();
  }

  initForm(): void {
    this.searchForm = this.fb.group({
      searchInput: ['', Validators.required]
    });
  }

  quoteTrackByFn(index: number, quote: Quote) {
    return quote.id;
  }

  onSubmit(): void {
    this.isLoading = true;
    this.fetchError = false;

    this.quoteService.searchQuote(this.searchForm.controls.searchInput.value)
      .pipe(finalize(() => {
        this.isLoading = false;
        this.searchForm.reset();
      }))
      .subscribe(
        data => this.searchListResult = data.result,
        () => {
          this.fetchError = true;
          this.searchListResult = null;
        }
      );
  }
}
