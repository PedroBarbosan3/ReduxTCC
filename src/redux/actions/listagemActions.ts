export enum ListagemActionTypes {
  LOADING = "Carregamento",
  GET_LIST = "Listagem",
}

export interface ListagemAction {
  loading: (loading: boolean) => void;
  getList: (list: any[]) => void;
}

export const listagemActions = (function listagemActions(): ListagemAction {
  const actions = {
    loading: (loading: boolean): any => ({
      type: ListagemActionTypes.LOADING,
      payload: loading,
    }),
    list: (list: any[]): any => ({
      type: ListagemActionTypes.GET_LIST,
      payload: list,
    }),
  };

  const loading = (loading: boolean): any => {
    return (dispatch: any) => {
      dispatch(actions.loading(loading));
    };
  };

  const getList = (list: any[]): any => {
    return (dispatch: any) => {
      dispatch(actions.list(list));
    };
  };

  return {
    loading,
    getList,
  };
})();
