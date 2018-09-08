import { Component, OnInit } from "@angular/core";
import { DataFetchService } from "../data-fetch.service";
import { MatDialog, MatDialogConfig } from "@angular/material";
import { DialogBuilderComponent } from "../dialog-builder/dialog-builder.component";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  username: string;
  email: string;
  password: string;
  confirm_password: string;

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

  onClickRegister(): void {
    const dialogRef = this.showDialog({
      title: "Registering...",
      type: this.ProgressIndeterminate_Dialog
    });
    this.dataFetch
      .sendRegisterRequest(
        this.username,
        this.email,
        this.password,
        this.confirm_password
      )
      .subscribe(
        data => {
          dialogRef.close();
          let result = data["success"];
          if (result != undefined) {
            this.showDialog({
              title: "Success",
              message: "Registration successful",
              type: this.Message_Dialog,
              negativeButton: "Close",
              positiveButton: "Sign in"
            });
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
          if (error.status == 500) {
            this.showDialog({
              title: "Error",
              message: "User already registered",
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
