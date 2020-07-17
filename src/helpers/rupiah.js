export const ribuan = (nStr) => {
  const value = nStr + "";
  return value.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

export const rupiah = (numberValue) => {
  const nStr = numberValue + "";
  const numberString = nStr.replace(/\D/g, "");
  const angkaRibuan = ribuan(numberString);
  return numberString.length > 0 ? `Rp ${angkaRibuan}` : "";
};
