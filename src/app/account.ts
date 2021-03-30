export interface Account{
  id?: number;
  accountType: accountT;
  balance: number;
}
enum accountT{
  KONTO_OSOBISTE,
  KONTO_FIRMOWE
}
