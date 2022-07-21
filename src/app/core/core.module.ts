import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NavBarComponent } from "./component/nav-bar/nav-bar.component";

@NgModule({
    imports: [RouterModule],
    declarations: [NavBarComponent],
    exports: [NavBarComponent]
})
export class CoreModule {

}