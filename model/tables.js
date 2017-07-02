const user = {
  table_name: 'User',
  primary_key: "UserID",
  columns: [
    {
      name: 'name',
      type: 'varchar',
      size: 20
    },
    {
      name: 'password',
      type: 'varchar',
      size: 255
    },
    {
      name: 'email',
      type: 'varchar',
      size: 50
    },
    {
      name: 'gender',
      type: 'varchar',
      size: 10
    },
    {
      name: 'popularity',
      type: 'int',
      size: 10
    },
    {
      name: 'birthday',
      type: 'date'
    },
    {
      name: 'location',
      type: 'varchar',
      size: 110
    }
  ]
}

const story = {
  table_name: 'Story',
  primary_key: 'StoryID',
  foreign_key: {
    table_ref: user.table_name,
    table_ref_key: user.primary_key
  },
  columns: [
    {
      name: 'title',
      type: 'varchar',
      size: 50
    },
    {
      name: 'content',
      type: 'varchar',
      size: 255
    },
    {
      name: 'date_created',
      type: 'datetime'
    },
    {
      name: 'date_last_updated',
      type: 'datetime'
    },
    {
      name: 'likes',
      type: 'int',
      size: 255
    }
  ]
}

const comment = {
  table_name: 'Comment',
  primary_key: 'CommentID',
  foreign_key: {
    table_ref: story.table_name,
    table_ref_key: story.primary_key
  },
  columns: [
    {
      name: 'content',
      type: 'varchar',
      size: 255
    },
    {
      name: 'date_created',
      type: 'datetime'
    }
  ]
}


const initAppTables = (model) => {
  model.createTables([user, story, comment])
}

module.exports = { initAppTables }
