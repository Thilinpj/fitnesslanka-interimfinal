import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { Router } from "@angular/router";

@Component({
  selector: "app-dialog-builder",
  templateUrl: "./dialog-builder.component.html",
  styleUrls: ["./dialog-builder.component.scss"]
})
export class DialogBuilderComponent implements OnInit {
  title: string;
  type: number;
  message: string;
  positiveButton: string;
  negativeButton: string;

  constructor(
    private router: Router,
    private dialogRef: MatDialogRef<DialogBuilderComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.title = data.title;
    this.type = data.type;
    this.message = data.message;
    this.positiveButton = data.positiveButton;
    this.negativeButton = data.negativeButton;
    console.log("data");
  }

  ngOnInit() {}

  public onNegativeButtonClick() {}

  public onPositiveButtonClick() {
    if (this.positiveButton == "Sign in") {
      this.router.navigate(["/signin"]);
    }
  }
}
