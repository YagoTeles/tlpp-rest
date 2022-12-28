export const localizedTextsMap = {
    //Colunas--------------------------------------
    columnMenuUnsort: "Não classificado",
    columnMenuSortAsc: "Ordem crescente",
    columnMenuSortDesc: "Ordem decrescente",
    columnMenuFilter: "Filtro",
    columnMenuHideColumn: "Ocultar Coluna",
    columnMenuShowColumns: "Mostrar/Ocultar colunas",
    columnsPanelTextFieldLabel: 'Encontrar coluna',
    columnsPanelShowAllButton: 'Mostrar tudo',
    columnsPanelHideAllButton: 'Esconder tudo',
    columnsPanelTextFieldPlaceholder: 'Coluna',
    //Filtros---------------------------------------
    toolbarFilters: 'Filtros',
    toolbarFiltersLabel: 'Mostrar filtros',
    toolbarFiltersTooltipHide: 'Esconder filtros',
    toolbarFiltersTooltipShow: 'Mostrar filtros',
    toolbarFiltersTooltipActive: (count) =>
      count !== 1 ? `${count} active filters` : `${count} active filter`,
    filterOperatorContains: 'Contem',
    filterOperatorEquals: 'É igual a',
    filterOperatorStartsWith: 'Começa com',
    filterOperatorEndsWith: 'Termina com',
    filterOperatorIsEmpty: 'Esta vazio',
    filterOperatorIsNotEmpty: 'Nao é vazio',
    filterOperatorIsAnyOf: '',
    filterPanelOperators: '',
    filterPanelColumns: 'Coluna',
    filterPanelInputLabel: 'Buscar',
    filterPanelInputPlaceholder: 'Buscar...',
    //Contador de linhas selecionadas----------------
    footerRowSelected: (count) =>
    count !== 1
      ? `${count.toLocaleString()} linhas selecionadas`
      : `${count.toLocaleString()} linha selecionada`,
    //Mostrador de numero de paginas e linhas totais-
    footerTotalVisibleRows: (visibleCount, totalCount) =>
      `${visibleCount.toLocaleString()} de ${totalCount.toLocaleString()}`,
    //CheckBox---------------------------------------
    checkboxSelectionHeaderName: 'Caixas de seleção',
    //Densidade--------------------------------------
    toolbarDensity: 'Densidade',
    toolbarDensityLabel: 'Densidade',
    toolbarDensityCompact: 'Compacta',
    toolbarDensityStandard: 'Padrão',
    toolbarDensityComfortable: 'Larga',
      
  };