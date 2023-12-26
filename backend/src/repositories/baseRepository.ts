class BaseRepository {
  model: any;
  constructor(model: any) {
    this.model = model;
  }

  async get(id:string){
    try{
        return await this.model.findById(id);
    }catch(error){
        console.log(error)
    }
  }

  async create(entity:any){
    try{
return await this.model.create(entity)
    }catch(error){
        console.log(error)
    }
  }
  
  async update(id:string,entity:any){
    try{
     return await this.model.findByIdAndUpdate(id, entity,{new:true})
    }catch(error){
        console.log(error)
    }
  }
  async delete(id:string){
    try{
        await this.model.findByIdAndDelete(id)
        return true
    }catch(error){
        console.log(error)
    }
  }
}

export default BaseRepository;