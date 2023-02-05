{
  "$merge": {
    "into": {
      "atlas": {
        "projectId": "<atlas-project-ID>",
        "clusterName": "<atlas-cluster-name>",
        "db": "<atlas-database-name>",
        "coll": "<atlas-collection-name>"
      }
    },
    "on": "<identifier field>"|[ "<identifier field1>", ...],
    "let": { <variables> },
    "whenMatched": "replace|keepExisting|merge|fail|pipeline",
    "whenNotMatched": "insert|discard|fail"
  }
}

