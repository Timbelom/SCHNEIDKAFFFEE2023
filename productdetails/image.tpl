{block name='productdetails-image' append}
{$showAttributesTable = ($Einstellungen.artikeldetails.merkmale_anzeigen === 'Y'
    && !empty($Artikel->oMerkmale_arr) || $showProductWeight || $showShippingWeight
    || $Einstellungen.artikeldetails.artikeldetails_abmessungen_anzeigen === 'Y'
    && (!empty($dimension['length']) || !empty($dimension['width']) || !empty($dimension['height']))
    || isset($Artikel->cMasseinheitName) && isset($Artikel->fMassMenge) && $Artikel->fMassMenge > 0
    && $Artikel->cTeilbar !== 'Y' && ($Artikel->fAbnahmeintervall == 0 || $Artikel->fAbnahmeintervall == 1)
    || ($Einstellungen.artikeldetails.artikeldetails_attribute_anhaengen === 'Y' || $funcAttr == 1)
    && !empty($Artikel->Attribute))}

{include file="snippets/zonen.tpl" id="opc_before_desc_attributes"}
{include file='productdetails/attributes.tpl' tplscope='details'
    showProductWeight=$showProductWeight showShippingWeight=$showShippingWeight
    dimension=$dimension showAttributesTable=$showAttributesTable}
{include file="snippets/zonen.tpl" id="opc_after_desc_attributes"}
{/block}

