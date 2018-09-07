import { Component, OnInit, Inject } from "@angular/core";
import { DataFetchService } from "../data-fetch.service";
import { MatDialog, MatDialogConfig } from "@angular/material";
import { DialogBuilderComponent } from "../dialog-builder/dialog-builder.component";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.scss"]
})
export class LoginComponent implements OnInit {
  email;
  password;

  response: string;
  readonly ProgressIndeterminate_Dialog = 0;
  readonly Message_Dialog = 1;

  constructor(private dataFetch: DataFetchService, public dialog: MatDialog) {}

  ngOnInit() {}

  onClickLogin(): void {
    const dialogRef = this.showDialog({ title: "Signing in...", type: this.ProgressIndeterminate_Dialog});
    this.dataFetch
      .sendLoginRequest(this.email, this.password)
      .subscribe(data => {
        let result = data["success"];
        if (result != undefined) {
          dialogRef.close();
        }
      });
  }

  showDialog(data) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "250px";
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = data;
    const dialogRef = this.dialog.open(DialogBuilderComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
    });
    return dialogRef;
  }
}
