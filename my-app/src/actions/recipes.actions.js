import { recipesConstants } from '../constants';
import { recipesService } from '../services';
// import {alertActions} from './alert.actions';
// import {history} from "../helpers";

export const recipesActions = {
    setStep,
    // filesAdded,
    // fileRemoved,
    // getTicketCategories,
    // createProblemTicket,
    // getMyTickets,
    // getTicketData,
    // submitReply,
  };

  function setStep(step) {
    return (dispatch) => {
      dispatch({type: recipesConstants.CHANGE_STEP, step});
    };
  }

  function filesAdded(files) {
    return (dispatch) => {
      dispatch({type: reportProblemConstants.FILE_ADD, files});
    };
  }
  
  function fileRemoved(file) {
    return (dispatch) => {
      dispatch({type: reportProblemConstants.FILE_REMOVE, file});
    };
  }  

  function getTicketCategories() {
    return async (dispatch) => {
        await dispatch(request());
        try {
          const {data} = await reportProblemService.getTicketCategories();
          dispatch(success(data));
        } catch (ex) {
          dispatch(failure(ex.message));
        }
      };
    
      function request() {
        return {type: reportProblemConstants.GET_TICKET_CATEGORIES_REQUEST};
      }
    
      function success(categories) {
        return {type: reportProblemConstants.GET_TICKET_CATEGORIES_SUCCESS, categories};
      }
    
      function failure(error) {
        return {type: reportProblemConstants.GET_TICKET_CATEGORIES_FAILURE, error};
      }
  }

  function createProblemTicket(ticketObject) {
    return async (dispatch) => {
      await dispatch(request(ticketObject));
      try {
        const {data} = await reportProblemService.createTicket(ticketObject);
        dispatch(clear());
        dispatch(success(data));
        dispatch(
          alertActions.success({header: 'Problem submitted successfully'}),
        );
        history.push(`ticket/${data._id}`);
      } catch (ex) {
        dispatch(failure(ex));
        dispatch(alertActions.error({header: ex.message}));
      }
    };
  
    function request() {
      return {type: reportProblemConstants.REPORT_PROBLEM_REQUEST};
    }
  
    function success(ticket) {
      return {type: reportProblemConstants.REPORT_PROBLEM_SUCCESS, ticket};
    }
  
    function failure(errors) {
      return {type: reportProblemConstants.REPORT_PROBLEM_FAILURE, errors};
    }
  
    function clear() {
      return {type: reportProblemConstants.CLEAR};
    }
  }

  function getMyTickets() {
    return async (dispatch) => {
        await dispatch(request());
        try {
          const {data} = await reportProblemService.getMyTickets();
          dispatch(success(data));
        } catch (ex) {
          dispatch(failure(ex.message));
        }
      };
    
      function request() {
        return {type: reportProblemConstants.GET_TICKETS_REQUEST};
      }
    
      function success(tickets) {
        return {type: reportProblemConstants.GET_TICKETS_SUCCESS, tickets};
      }
    
      function failure(error) {
        return {type: reportProblemConstants.GET_TICKETS_FAILURE, error};
      }
  }

  function getTicketData(ticketId) {
    return async (dispatch) => {
        await dispatch(request());
        try {
          const {data} = await reportProblemService.getTicketData(ticketId);
          dispatch(success(data));
        } catch (ex) {
          dispatch(failure(ex.message));
        }
      };
    
      function request() {
        return {type: reportProblemConstants.GET_TICKET_DATA_REQUEST};
      }
    
      function success(ticketData) {
        return {type: reportProblemConstants.GET_TICKET_DATA_SUCCESS, ticketData};
      }
    
      function failure(error) {
        return {type: reportProblemConstants.GET_TICKET_DATA_FAILURE, error};
      }
  }

  function submitReply(text, ticketId) {
    return async (dispatch) => {
        await dispatch(request());
        try {
          const {data} = await reportProblemService.replyToTicket(text, ticketId);
          dispatch(success(data));
        } catch (ex) {
          dispatch(failure(ex.message));
        }
      };
    
      function request() {
        return {type: reportProblemConstants.REPLY_TO_TICKET_REQUEST};
      }
    
      function success(ticketData) {
        return {type: reportProblemConstants.REPLY_TO_TICKET_SUCCESS, ticketData};
      }
    
      function failure(error) {
        return {type: reportProblemConstants.REPLY_TO_TICKET_FAILURE, error};
      }
  }