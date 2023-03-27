class APIFeatures {

    constructor(query, queryString) {

        this.query = query
        this.queryString = queryString
    }


    filter() {

         let queryObj = { ...this.queryString }
         queryObj.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`)
         this.query = this.query.find(JSON.stringify(query))
         console.log(this.query)
         return this
    }
    search() {

        let querySearch = this.queryString.q
        console.log(querySearch)
        if(querySearch) {

            this.query = this.query.find({$or: [ {title: { $regex: `${querySearch}` } }, {isbn: { $regex: `${querySearch}` } }   ]})
        }
        return this
    }
    sort() {

        if(this.queryString.sort) {
            
            
           console.log(this.queryString.sort)
           const sortBy = this.queryString.sort.split(',').join(' ')
           console.log(sortBy)
           this.query = this.query.sort(sortBy)
        } else {

            this.query = this.query.sort('-memberSince')

        }

        return this
    }
    paginate() {
        const page = this.queryString.page * 1 || 1;
        const limit = this.queryString.limit * 1 || 8;
        const skip = (page - 1) * limit;
       console.log(page)
       console.log(limit)
        this.query = this.query.skip(skip).limit(limit);
    
        return this;
       }
}

module.exports = APIFeatures