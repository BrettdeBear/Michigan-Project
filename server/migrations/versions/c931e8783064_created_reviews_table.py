"""created reviews table

Revision ID: c931e8783064
Revises: d9b34edb5022
Create Date: 2023-04-07 08:29:23.999398

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'c931e8783064'
down_revision = 'd9b34edb5022'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('reviews',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('rating', sa.String(), nullable=True),
    sa.Column('text', sa.String(), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('trail_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['trail_id'], ['trails.id'], name=op.f('fk_reviews_trail_id_trails')),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], name=op.f('fk_reviews_user_id_users')),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('reviews')
    # ### end Alembic commands ###
