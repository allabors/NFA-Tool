import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EditableTableModule } from './editable-table/editable-table.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NewprojectComponent } from './newproject/newproject.component';
import { NfacatalogComponent } from './nfacatalog/nfacatalog.component';
import { NewnfaComponent } from './newnfa/newnfa.component';
import { NewpackageComponent } from './newpackage/newpackage.component';
import { HomeComponent } from './home/home.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {DataStorageService} from './shared/data-storage.service';
import {Http, HttpModule} from '@angular/http';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';



// import ngx-translate and the http loader
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import { DialogComponent } from './dialog/dialog.component';
import { CurrentProjectComponent } from './current-project/current-project.component';
import { ProjectListComponent } from './current-project/project-list/project-list.component';
import { ProjectDetailComponent } from './current-project/project-detail/project-detail.component';
import { ProjectItemComponent } from './current-project/project-list/project-item/project-item.component';
import { ProjectEditComponent } from './current-project/project-edit/project-edit.component';
import {CurrentProjectService} from './current-project/current-project.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewprojectComponent,
    NfacatalogComponent,
    NewnfaComponent,
    NewpackageComponent,
    HomeComponent,
    AppComponent,
    DialogComponent,

    CurrentProjectComponent,
    ProjectListComponent,
    ProjectDetailComponent,
    ProjectItemComponent,
    ProjectEditComponent,

  ],
  imports: [
    BrowserModule,
    EditableTableModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],


  providers: [DataStorageService, CurrentProjectService],
  bootstrap: [AppComponent]

})
export class AppModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
