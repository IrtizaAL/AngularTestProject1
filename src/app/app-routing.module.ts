import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Shell } from '@app/shell/shell.service';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: 'dashboard',
      loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
    },
    {
      path: 'customers_management',
      loadChildren: () =>
        import('./customers-management/customers-management.module').then((m) => m.CustomersManagementModule),
    },
    {
      path: 'category_management',
      loadChildren: () =>
        import('./category-management/category-management.module').then((m) => m.CategoryManagementModule),
    },
    {
      path: 'chat_history',
      loadChildren: () => import('./chat-history/chat-history.module').then((m) => m.ChatHistoryModule),
    },
    {
      path: 'rating_&_review_management',
      loadChildren: () =>
        import('./rating-review-management/rating-review-management.module').then(
          (m) => m.RatingReviewManagementModule
        ),
    },
    {
      path: 'task_management',
      loadChildren: () => import('./task-management/task-management.module').then((m) => m.TaskManagementModule),
    },
    {
      path: 'ticket_management',
      loadChildren: () => import('./ticket-management/ticket-management.module').then((m) => m.TicketManagementModule),
    },
    {
      path: 'transaction_history',
      loadChildren: () =>
        import('./transaction-history/transaction-history.module').then((m) => m.TransactionHistoryModule),
    },
    {
      path: 'settings',
      loadChildren: () => import('./settings/settings.module').then((m) => m.SettingsModule),
    },
  ]),
  // Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
