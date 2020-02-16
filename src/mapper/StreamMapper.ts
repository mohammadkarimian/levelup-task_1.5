import through2 = require("through2")
import stream = require('stream');

export abstract class StreamMapper<E, D> {
    protected abstract map(dto: D): E

    toEntity(): stream.Transform {
        const self  = this
        return through2.obj(function (chunk, enc, callback) {
            this.push(self.map(chunk))
            callback()
           })
    }
}