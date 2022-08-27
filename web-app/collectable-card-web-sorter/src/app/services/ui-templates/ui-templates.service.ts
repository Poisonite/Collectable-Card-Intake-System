// Core+
import { Injectable } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class UiTemplatesService {
  constructor(
    private loadingController: LoadingController,
    private alertController: AlertController
  ) {}

  // A reusable function to generate spinners with custom messages throughout the site
  async createLoadingSpinner(message: string) {
    // Turn on the loading indicator
    const loading = await this.loadingController.create({
      backdropDismiss: false,
      message: message,
    });

    // Return the loading object so it can be stopped later
    return loading;
  }

  // A reusable function to generate 1 action ionic alerts with custom messages throughout the site
  async createSingleActionAlert(header: string, message: string) {
    // Build an alert using the text passed to the function.
    const alert = await this.alertController.create({
      header: `${header}`,
      message: `${message}`,
      buttons: [
        {
          text: 'OK',
          handler: async () => {
            await alert.dismiss();
          },
        },
      ],
    });

    // Return the alert object so it can be stopped later
    return alert;
  }
}
