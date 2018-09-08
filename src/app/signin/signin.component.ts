import { Component, OnInit, Inject } from "@angular/core";
import { DataFetchService } from "../data-fetch.service";
import { MatDialog, MatDialogConfig } from "@angular/material";
import { DialogBuilderComponent } from "../dialog-builder/dialog-builder.component";
import { Router } from "@angular/router";

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
  readonly Error_Dialog = 2;

  constructor(
    private router: Router,
    private dataFetch: DataFetchService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {}

  onClickLogin(): void {
    const dialogRef = this.showDialog({
      title: "Signing in...",
      type: this.ProgressIndeterminate_Dialog
    });
    this.dataFetch.sendLoginRequest(this.email, this.password).subscribe(
      data => {
        dialogRef.close();
        let result = data["success"];
        if (result != undefined) {
          this.router.navigate(["/home"]);
        } else {
          this.showDialog({
            title: "Error",
            message: "Something went wrong",
            type: this.Error_Dialog,
            negativeButton: "Close"
          });
        }
      },
      (error: any) => {
        dialogRef.close();
        if (error.status == 401) {
          this.showDialog({
            title: "Error",
            message: "Invalid username or password",
            type: this.Error_Dialog,
            negativeButton: "Close"
          });
        } else {
          this.showDialog({
            title: "Error",
            message: "Something went wrong",
            type: this.Error_Dialog,
            negativeButton: "Close"
          });
        }
      }
    );
  }

  showDialog(data) {
    const dialogRef = this.dialog.open(DialogBuilderComponent, {
      width: "250px",
      disableClose: true,
      autoFocus: true,
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
    });
    return dialogRef;
  }
}
