import api from '../api';

export const getLonches=(startDate:Date,endDate:Date)=>{
    return api.get(`/launch/?window_start__gt=${startDate.toISOString()}&window_start__lt=${endDate.toISOString()}`);
}
