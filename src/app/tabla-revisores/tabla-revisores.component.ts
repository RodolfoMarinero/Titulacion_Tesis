import { Component, OnInit } from "@angular/core";
import { BDRevisoresService } from "../bd-revisores.service";

@Component({
  selector: "app-tabla-revisores",
  templateUrl: "./tabla-revisores.component.html",
  styleUrls: ["./tabla-revisores.component.css"],
})
export class TablaRevisoresComponent implements OnInit {
  
  constructor(private service:BDRevisoresService) {}

  ngOnInit(): void {}
}
