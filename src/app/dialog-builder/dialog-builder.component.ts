import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-dialog-builder",
  templateUrl: "./dialog-builder.component.html",
  styleUrls: ["./dialog-builder.component.scss"]
})
export class DialogBuilderComponent implements OnInit {
  title: string;
  type: number;

  constructor(
    private dialogRef: MatDialogRef<DialogBuilderComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.title = data.title;
    this.type = data.type;
  }

  ngOnInit() {}
}
