import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {ClientCreateComponent} from './client/client-create/client-create.component';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {ClientsListComponent} from './client/clients-list/clients-list.component';
import {FindClientByIdComponent} from './client/find-client/find-client-byId/find-client-byId.component';
import {EditClientComponent} from './client/edit-client/edit-client.component';
import {FindClientComponent} from './client/find-client/find-client.component';
import {FindClientByPeselComponent} from './client/find-client/find-client-byPesel/find-client-byPesel.component';
import {AddressComponent} from './address/address.component';
import {EditAddressComponent} from './address/edit-address/edit-address.component';
import {AddressViewComponent} from './address/address-view/address-view.component';
import {AuthorizationInterceptor} from './authorization.interceptor';
import {AddNewUserComponent} from './user/add-new-user/add-new-user.component';
import {UserListComponent} from './user/user-list/user-list.component';
import {DeleteUserComponent} from './user/delete-user/delete-user.component';
import {AccountComponent} from './product/account/account.component';
import {ProductListComponent} from './product/product-list.component';
import {SeekingComponent} from './seeking/seeking.component';
import {DepositComponent} from './product/deposit/deposit.component';
import {LoanComponent} from './product/loan/loan.component';
import {MortgageComponent} from './product/mortgage/mortgage.component';
import {NewAccountComponent} from './product/account/new-account/new-account.component';
import {NewDepositComponent} from './product/deposit/new-deposit/new-deposit.component';
import {NewLoanComponent} from './product/loan/new-loan/new-loan.component';
import {NewMortgageComponent} from './product/mortgage/new-mortgage/new-mortgage.component';


const routes: Routes = [{
    path: 'client/client-create',
    component: ClientCreateComponent
  },
  {
    path: 'client/clients-list',
    component: ClientsListComponent
  },
  {
    path: 'client/find-client/find-client-byId',
    component: FindClientByIdComponent
  },
  {
    path: 'client/find-client/find-client-byPesel',
    component: FindClientByPeselComponent
  },
  {
    path: 'client/find-client/find-client-byId/:clientId',
    component: EditClientComponent
  },
  {
    path: 'client/edit-client/:clientId',
    component: EditClientComponent
  },
  {
    path: 'client/find-client',
    component: FindClientComponent
  },
  {
    path: 'address/:clientId',
    component: AddressComponent
  },
  {
    path: 'address/edit-address/:addressId',
    component: EditAddressComponent
  },
  {
    path: 'address/address-view/:clientId',
    component: AddressViewComponent
  },
  {
    path: 'user/add-new-user',
    component: AddNewUserComponent
  },
  {
    path: 'user/user-list',
    component: UserListComponent
  },
  {
    path: 'delete-user/:userId',
    component: DeleteUserComponent
  },
  {
    path: 'product/account/:clientId',
    component: AccountComponent
  },
  {
    path: 'product/deposit/:clientId',
    component: DepositComponent
  },
  {
    path: 'product/loan/:clientId',
    component: LoanComponent
  },
  {
    path: 'product/mortgage/:clientId',
    component: MortgageComponent
  },
  {
    path: 'product/product-list/:clientId',
    component: ProductListComponent
  },
  {
    path: 'seeking/:seekword',
    component: SeekingComponent
  },
  {
    path: 'account/new-account/:clientId',
    component: NewAccountComponent
  },
  {
    path: 'deposit/new-deposit/:clientId',
    component: NewDepositComponent
  },
  {
    path: 'loan/new-loan/:clientId',
    component: NewLoanComponent
  },
  {
    path: 'mortgage/new-mortgage/:clientId',
    component: NewMortgageComponent
  }
  ];

@NgModule({
  declarations: [
    AppComponent,
    ClientCreateComponent,
    ClientsListComponent,
    FindClientByIdComponent,
    EditClientComponent,
    FindClientComponent,
    FindClientByPeselComponent,
    AddressComponent,
    EditAddressComponent,
    AddressViewComponent,
    AddNewUserComponent,
    UserListComponent,
    DeleteUserComponent,
    AccountComponent,
    DepositComponent,
    LoanComponent,
    MortgageComponent,
    ProductListComponent,
    SeekingComponent,
    NewAccountComponent,
    NewDepositComponent,
    NewLoanComponent,
    NewMortgageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [{
    useClass: AuthorizationInterceptor,
    multi: true,
    provide: HTTP_INTERCEPTORS
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
