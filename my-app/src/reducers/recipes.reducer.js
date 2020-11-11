import { recipesConstants } from "../constants";
  
  const initialState = {
    recipes: [],
    recipe: {
        title: '',
        creatorName: '',
        description: '',
        servings: 1,
        step: '',
    },
    ticketData: '',
    files: [],
    ticketCategories: [],
    errors: {},
  };

  export function recipes(state = initialState, action) {
    switch (action.type) {
        ///////////////////// UPLOAD FILES ///////////////////
        case recipesConstants.CHANGE_STEP:
          return { ...state, [recipe.step]: action.step };


        // ///////////////////// UPLOAD FILES ///////////////////
        // case reportProblemConstants.FILE_ADD:
        //   return { ...state, files: action.files };
        // case reportProblemConstants.FILE_REMOVE:
        //   return {
        //     ...state,
        //     files: state.files.filter(f => f !== action.file)
        //   };

        // ///////////////////// VIEW CATEGORY ///////////////////
        // case reportProblemConstants.GET_TICKET_CATEGORIES_REQUEST:
        //   return {
        //     ...state,
        //   };
        // case reportProblemConstants.GET_TICKET_CATEGORIES_SUCCESS:
        //   return {
        //     ...state,
        //     ticketCategories: action.categories,
        //   }; 
        // case reportProblemConstants.GET_TICKET_CATEGORIES_FAILURE:
        //   return {
        //     ...state,
        //   };

        // ///////////////////// CREATE TICKET ///////////////////
        // case reportProblemConstants.REPORT_PROBLEM_REQUEST:
        //   return {
        //     ...state,
        //   };             
        // case reportProblemConstants.REPORT_PROBLEM_SUCCESS:
        //   return {
        //     ...state,
        //     ticketData: action.ticket,
        //   };  
        // case reportProblemConstants.REPORT_PROBLEM_FAILURE:
        //   return {
        //     ...state,
        //   };
          
        // //////////////////// VIEW TICKETS //////////////////
        // case reportProblemConstants.GET_TICKETS_REQUEST:
        //   return {
        //     ...state,
        //   };             
        // case reportProblemConstants.GET_TICKETS_SUCCESS:
        //   return {
        //     ...state,
        //     tickets: action.tickets,
        //   };  
        // case reportProblemConstants.GET_TICKETS_FAILURE:
        //   return {
        //     ...state,
        //   };

        // /////////////////// VIEW TICKET //////////////////
        // case reportProblemConstants.GET_TICKET_DATA_REQUEST:
        //   return {
        //     ...state,
        //   };             
        // case reportProblemConstants.GET_TICKET_DATA_SUCCESS:
        //   return {
        //     ...state,
        //     ticketData: action.ticketData,
        //   };  
        // case reportProblemConstants.GET_TICKET_DATA_FAILURE:
        //   return {
        //     ...state,
        //   };          

        // //////////////////////// REPLY //////////////////////
        // case reportProblemConstants.REPLY_TO_TICKET_REQUEST:
        //   return {
        //     ...state,
        //   };             
        // case reportProblemConstants.REPLY_TO_TICKET_SUCCESS:
        //   return {
        //     ...state,
        //     ticketData: action.ticketData,
        //   };  
        // case reportProblemConstants.REPLY_TO_TICKET_FAILURE:
        //   return {
        //     ...state,
        //   };           
                  
        // ///////////////////// CLEAR STATE ///////////////////
        // case reportProblemConstants.CLEAR:
        //   return { ...initialState };                  
        default:
          return state;
    }
  }
  