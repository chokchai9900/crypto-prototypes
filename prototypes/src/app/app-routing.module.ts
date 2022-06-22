import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'cart-edit-template',
    loadChildren: () => import('./cart-edit-template/cart-edit-template.module').then( m => m.CartEditTemplatePageModule)
  },
  {
    path: 'cart-checkout-template',
    loadChildren: () => import('./cart-checkout-template/cart-checkout-template.module').then( m => m.CartCheckoutTemplatePageModule)
  },
  {
    path: 'option-dialog-template',
    loadChildren: () => import('./option-dialog-template/option-dialog-template.module').then( m => m.OptionDialogTemplatePageModule)
  },
  {
    path: 'cart-dialog-template',
    loadChildren: () => import('./cart-dialog-template/cart-dialog-template.module').then( m => m.CartDialogTemplatePageModule)
  },
  {
    path: 'form-template',
    loadChildren: () => import('./form-template/form-template.module').then( m => m.FormTemplatePageModule)
  },
  {
    path: 'form-binding',
    loadChildren: () => import('./form-binding/form-binding.module').then( m => m.FormBindingPageModule)
  },
  {
    path: 'form-send-data',
    loadChildren: () => import('./form-send-data/form-send-data.module').then( m => m.FormSendDataPageModule)
  },
  {
    path: 'form-receive-data',
    loadChildren: () => import('./form-receive-data/form-receive-data.module').then( m => m.FormReceiveDataPageModule)
  },
  {
    path: 'list-template',
    loadChildren: () => import('./list-template/list-template.module').then( m => m.ListTemplatePageModule)
  },
  {
    path: 'form-input-template',
    loadChildren: () => import('./form-input-template/form-input-template.module').then( m => m.FormInputTemplatePageModule)
  },
  {
    path: 'condition-template',
    loadChildren: () => import('./condition-template/condition-template.module').then( m => m.ConditionTemplatePageModule)
  },
  {
    path: 'agreement-template',
    loadChildren: () => import('./agreement-template/agreement-template.module').then( m => m.AgreementTemplatePageModule)
  },
  {
    path: 'consent-info-user-template',
    loadChildren: () => import('./consent-info-user-template/consent-info-user-template.module').then( m => m.ConsentInfoUserTemplatePageModule)
  },
  {
    path: 'consent-info-manager-template',
    loadChildren: () => import('./consent-info-manager-template/consent-info-manager-template.module').then( m => m.ConsentInfoManagerTemplatePageModule)
  },
  {
    path: 'home-template',
    loadChildren: () => import('./home-template/home-template.module').then( m => m.HomeTemplatePageModule)
  },
  {
    path: 'condition-timer-template',
    loadChildren: () => import('./condition-timer-template/condition-timer-template.module').then( m => m.ConditionTimerTemplatePageModule)
  },
  {
    path: 'consent-register-template',
    loadChildren: () => import('./consent-register-template/consent-register-template.module').then( m => m.ConsentRegisterTemplatePageModule)
  },
  {
    path: 'option-dialog-binding',
    loadChildren: () => import('./option-dialog-binding/option-dialog-binding.module').then( m => m.OptionDialogBindingPageModule)
  },
  {
    path: 'form-confirm-dialog',
    loadChildren: () => import('./form-confirm-dialog/form-confirm-dialog.module').then( m => m.FormConfirmDialogPageModule)
  },
  {
    path: 'form-service',
    loadChildren: () => import('./form-service/form-service.module').then( m => m.FormServicePageModule)
  },  {
    path: 'option-dialog-no-submit',
    loadChildren: () => import('./option-dialog-no-submit/option-dialog-no-submit.module').then( m => m.OptionDialogNoSubmitPageModule)
  },
  {
    path: 'crypto-main',
    loadChildren: () => import('./crypto-main/crypto-main.module').then( m => m.CryptoMainPageModule)
  },
  {
    path: 'crypto-wallet',
    loadChildren: () => import('./crypto-wallet/crypto-wallet.module').then( m => m.CryptoWalletPageModule)
  },
  {
    path: 'crypto-deposit',
    loadChildren: () => import('./crypto-deposit/crypto-deposit.module').then( m => m.CryptoDepositPageModule)
  },
  {
    path: 'crypto-withdraw-ex',
    loadChildren: () => import('./crypto-withdraw-ex/crypto-withdraw-ex.module').then( m => m.CryptoWithdrawExPageModule)
  },
  {
    path: 'crypto-withdraw-in',
    loadChildren: () => import('./crypto-withdraw-in/crypto-withdraw-in.module').then( m => m.CryptoWithdrawInPageModule)
  },
  {
    path: 'crypto-wallet-detail',
    loadChildren: () => import('./crypto-wallet-detail/crypto-wallet-detail.module').then( m => m.CryptoWalletDetailPageModule)
  },  {
    path: 'crypto-withdraw-mana-list',
    loadChildren: () => import('./crypto-withdraw-mana-list/crypto-withdraw-mana-list.module').then( m => m.CryptoWithdrawManaListPageModule)
  },
  {
    path: 'crypto-withdraw-mana',
    loadChildren: () => import('./crypto-withdraw-mana/crypto-withdraw-mana.module').then( m => m.CryptoWithdrawManaPageModule)
  },
  {
    path: 'crypto-withdraw-mana-confirm',
    loadChildren: () => import('./crypto-withdraw-mana-confirm/crypto-withdraw-mana-confirm.module').then( m => m.CryptoWithdrawManaConfirmPageModule)
  },
  {
    path: 'crypto-withdraw-mana-success',
    loadChildren: () => import('./crypto-withdraw-mana-success/crypto-withdraw-mana-success.module').then( m => m.CryptoWithdrawManaSuccessPageModule)
  },
  {
    path: 'crypto-transfer-list',
    loadChildren: () => import('./crypto-transfer-list/crypto-transfer-list.module').then( m => m.CryptoTransferListPageModule)
  },
  {
    path: 'crypto-transfer-edit',
    loadChildren: () => import('./crypto-transfer-edit/crypto-transfer-edit.module').then( m => m.CryptoTransferEditPageModule)
  },
  {
    path: 'crypto-transfer-confirm',
    loadChildren: () => import('./crypto-transfer-confirm/crypto-transfer-confirm.module').then( m => m.CryptoTransferConfirmPageModule)
  },
  {
    path: 'crypto-transfer-success',
    loadChildren: () => import('./crypto-transfer-success/crypto-transfer-success.module').then( m => m.CryptoTransferSuccessPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
