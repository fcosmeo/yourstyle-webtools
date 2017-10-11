var sFileName = 'Suscripciones';
function ExportXLSX(){
  $('#Suscripciones').tableExport({fileName: sFileName,
    type: 'xlsx'
  });
}

